import fs from 'fs';
import express from 'express';
import bodyParser from "body-parser";
import multer from 'multer';
import { v4 } from 'uuid';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  createBooksDataFile,
  readBooksData,
  saveBooksData
} from "./functions.mjs";
import * as path from "path";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const booksDataFolderPath = path.join(__dirname, 'data', 'books/');
const booksDataFilePath = path.join(__dirname, 'data', 'books.json');

let booksData = [];

if (await fs.promises.access(booksDataFolderPath).catch(() => true)) {
  await fs.promises.mkdir(booksDataFolderPath, { recursive: true }).catch((error) => {
    console.error('Помилка при створенні каталогу:', error);
  });
}

try {
  await fs.promises.access(booksDataFilePath);
  booksData = await readBooksData(booksDataFilePath);
} catch (error) {
  await createBooksDataFile(booksDataFilePath);
}


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

//Область для запитів
///////////////////////////
//Отримання всіх книг
app.get('/api/books', (req, res) => {
  res.json(booksData);
});


//Пошук книги за автором, назвою та жанром
app.get('/api/books/search', (req, res) => {
  const author = req.query.author;
  const genre = req.query.genre;
  const title = req.query.bookTitle;

  let filteredBooks = booksData;

  if (author) {
    filteredBooks = filteredBooks.filter(book => book.author.toLowerCase() === author.toLowerCase());
  }

  if (genre) {
    filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
  }

  if (title) {
    filteredBooks = filteredBooks.filter(book => book.bookTitle.toLowerCase().includes(title.toLowerCase()));
  }

  res.status(200).json(filteredBooks);
});


//Отримання 10 найпопулярніших книг у всіх жанрах
app.get('/api/books/top/all', (req, res) => {
  const topBooks = booksData
    .filter(book => book.rating !== null)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
  res.status(200).json(topBooks);
});

//Отримання 10 найпопулярніших книг у певному жанрі
app.get('/api/books/top/genre', (req, res) => {
  const genre = req.query.genre;
  const topBooksByGenre = booksData
    .filter(book => book.rating !== null && book.genre === genre)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  res.status(200).json(topBooksByGenre);
});

//Отримання 3 найпопулярніші книги певного автора
app.get('/api/books/top/author', (req, res) => {
  const author = req.query.author;

  const topBooksByAuthor = booksData
    .filter(book => book.rating !== null && book.author === author)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  res.status(200).json(topBooksByAuthor);
});


//Отримання конкретної книги
app.get('/api/books/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  const book = booksData.find(book => book.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ error: 'Книга не знайдена' });
  }
});


//Додавання нової книги
app.post('/api/books', upload.single('textFile'), async (req, res) => {
  try {
    const newBook = {
      id: v4(),
      bookTitle: req.body.bookTitle,
      author: req.body.author,
      genre: req.body.genre,
      publicationYear: req.body.publicationYear,
      rating: null
    };

    newBook.textFilePath = `${booksDataFolderPath}${newBook.id}.txt`;

    booksData.push(newBook);
    await saveBooksData(booksDataFilePath, booksData);

    const textFileBuffer = req.file?.buffer;
    if(textFileBuffer) {
      await fs.promises.writeFile(newBook.textFilePath, textFileBuffer);
    }

    res.status(201).json(newBook);
  }
  catch (error) {
    console.error('Помилка при збереженні даних: ', error)
    res.status(500).json({ error: 'Помилка при збереженні даних' });
  }
});


//Оновлення конкретної книги
app.patch('/api/books/:bookId', upload.single('textFile'), async (req, res) => {
  const bookId = req.params.bookId;
  const updatedBookData = req.body;
  const bookIndex = booksData.findIndex(book => book.id === bookId);

  if(bookIndex !== -1) {
    booksData[bookIndex] = { ...booksData[bookIndex], ...updatedBookData };

    try {
      const textFileBuffer = req.file?.buffer;
      if (textFileBuffer) {
        const textFilePath = `${booksDataFolderPath}${bookId}.txt`
        await fs.promises.writeFile(textFilePath, textFileBuffer);
        booksData[bookIndex].textFilePath = textFilePath;
      }

      await saveBooksData(booksDataFilePath, booksData);

      res.json(booksData[bookIndex]);
    }
    catch (error) {
      console.error('Помилка при збереженні даних:', error);
      res.status(500).json({ error: 'Помилка при збереженні даних' });
    }
  }
  else {
    res.status(404).json({ error: 'Книга не знайдена'} );
  }
});


//Видалення конкретної книги
app.delete('/api/books/:bookId', upload.single('textFile'), async (req, res) => {
  const bookId = req.params.bookId;
  const bookIndex = booksData.findIndex(book => book.id === bookId);

  if(bookIndex !== -1) {
    try {
      const textFilePath = booksData[bookIndex].textFilePath;

      try {
        await fs.promises.access(textFilePath);
        await fs.promises.unlink(textFilePath);
      }
      catch (error) {
        console.error(error)
      }

      booksData.splice(bookIndex, 1);

      await saveBooksData(booksDataFilePath, booksData);
      res.status(204).end();
    }
    catch (error) {
      console.error('Помилка при збереженні даних:', error);
      res.status(500).json({ error: 'Помилка при збереженні даних' });
    }
  }
  else {
    res.status(404).json({ error: 'Книга не знайдена' });
  }
});


//Додавання відгуку до книги конкретної книги
app.post('/api/books/:bookId/reviews', async (req, res) => {
  const bookId = req.params.bookId;
  const review = req.body;
  const book = booksData.find(book => book.id === bookId);

  if (book) {
    if (!book.reviews) {
      book.reviews = [];
    }

    const existingReview = book.reviews.find(existingReview => existingReview.email === review.email);

    if (existingReview) {
      res.status(400).json({ error: 'Користувач з цим email вже залишав відгук для цієї книги' });
    } else {
      const numericRating = parseFloat(review.rating);

      book.reviews.push({
        email: review.email,
        text: review.text,
        rating: numericRating
      });

      const totalRatings = book.reviews.reduce((total, review) => total + review.rating, 0);
      book.rating = (totalRatings / book.reviews.length).toFixed(1);

      await saveBooksData(booksDataFilePath, booksData);

      res.status(201).json({ message: 'Відгук було успішно додано' });
    }
  } else {
    res.status(404).json({ error: 'Книга не знайдена' });
  }
});


//Отримання тексту книги
app.get('/api/books/:bookId/text', async (req, res) => {
  const  bookId = req.params.bookId;
  const bookIndex = booksData.findIndex(book => book.id === bookId);

  if (bookIndex !== -1) {
    const textFilePath = booksData[bookIndex].textFilePath;

    try {
      const textFileContent = await fs.promises.readFile(textFilePath, 'utf-8');
      res.send(textFileContent);
    }
    catch (error) {
      console.error('Помилка при читанні файлу: ', error);
      res.status(500).json({ error: 'Помилка при читанні файлу' });
    }
  }
  else {
    res.status(404).json({ error: 'Книга не знайдена' });
  }
});


app.get('/api/books/:bookId/text/download', async (req, res) => {
  const bookId = req.params.bookId;
  const bookIndex = booksData.findIndex(book => book.id === bookId);

  if (bookIndex !== -1) {
    const textFilePath = booksData[bookIndex].textFilePath;

    try {
      const textFileContent = await fs.promises.readFile(textFilePath, 'utf-8');

      res.setHeader('Content-Disposition', `attachment; filename=${bookId}.txt`);
      res.send(textFileContent);
    }
    catch (error) {
      console.error('Помилка при читанні файлу: ', error);
      res.status(500).json({ error: 'Помилка при читанні файлу' });
    }
  }
  else {
    res.status(404).json({ error: 'Книга не знайдена' });
  }
});
///////////////////////////
//Область для запитів


app.listen(port, () => {
  console.log(`Сервер було запущено на порту ${port}`);
});