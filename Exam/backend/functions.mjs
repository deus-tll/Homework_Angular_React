import fs from "fs/promises";

export async function readBooksData(booksDataFilePath) {
    try {
        const fileContent = await fs.readFile(booksDataFilePath, "utf-8");
        return JSON.parse(fileContent);
    }
    catch (error) {
        console.error('Помилка при читанні JSON файлу:', error);
    }
}

export async function createBooksDataFile(booksDataFilePath) {
    try {
        await fs.writeFile(booksDataFilePath, '[]');
    }
    catch (error) {
        console.error('Error creating JSON file:', error);
    }
}

export async function saveBooksData(booksDataFilePath, data) {
    try {
        await fs.writeFile(booksDataFilePath, JSON.stringify(data, null, 2));
    }
    catch (error) {
        console.error('Помилка при збереженні JSON файлу', error)
    }
}