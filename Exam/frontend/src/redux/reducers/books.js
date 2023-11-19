import {
  ADD_BOOK,
  ADD_REVIEW, CLEAR_SEARCH_RESULTS,
  DELETE_BOOK, DOWNLOAD_TEXT_FILE_BY_ID, EXISTING_REVIEW_ERROR,
  GET_BOOK_BY_ID, GET_BOOK_TEXT_BY_ID, GET_TOP_BOOKS, GET_TOP_BOOKS_BY_AUTHOR, GET_TOP_BOOKS_BY_GENRE,
  LOAD_BOOKS,
  SEARCH_BOOKS,
  UPDATE_BOOK
} from "../actionTypes/books";

const initialState = {
  books: [],
  currentBook: {},
  searchResults: [],
  topBooks: [],
  topBooksByGenre: [],
  topBooksByAuthor: [],
  existingReviewError: null
};

export function booksReducer(state = initialState, action) {
  let updatedBooks;
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state, books: action.payload || [] };
    case GET_BOOK_BY_ID:
      return { ...state, currentBook: action.payload };
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case DELETE_BOOK:
      updatedBooks = state.books.filter((book) => book.id !== action.payload);
      return { ...state, books: updatedBooks };
    case UPDATE_BOOK:
      updatedBooks = state.books.map((book) =>
        book.id === action.payload.id ? action.payload : book);
      return { ...state, books: updatedBooks };
    case ADD_REVIEW:
      const updatedBook = { ...state.currentBook, reviews: [...state.currentBook.reviews, action.payload] };
      return { ...state, currentBook: updatedBook, existingReviewError: null };
    case SEARCH_BOOKS:
      return { ...state, searchResults: action.payload || [] };
    case CLEAR_SEARCH_RESULTS:
      return { ...state, searchResults: [] };
    case GET_TOP_BOOKS:
      return { ...state, topBooks: action.payload };
    case GET_TOP_BOOKS_BY_GENRE:
      return { ...state, topBooksByGenre: action.payload };
    case GET_TOP_BOOKS_BY_AUTHOR:
      return { ...state, topBooksByAuthor: action.payload };
    case GET_BOOK_TEXT_BY_ID:
      return {
        ...state,
        currentBook: { ...state.currentBook, text: action.payload}
      };
    case DOWNLOAD_TEXT_FILE_BY_ID:
      return {
        ...state,
        currentBook: { ...state.currentBook, textFileContent: action.payload.fileContent }
      }
    case EXISTING_REVIEW_ERROR:
      return { ...state, existingReviewError: action.payload };
    default:
      return state;
  }
}