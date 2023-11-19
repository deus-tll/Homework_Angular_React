import axios from "axios";
import {
  ADD_BOOK,
  ADD_REVIEW,
  CLEAR_SEARCH_RESULTS,
  DELETE_BOOK,
  DOWNLOAD_TEXT_FILE_BY_ID, EXISTING_REVIEW_ERROR,
  GET_BOOK_BY_ID,
  GET_BOOK_TEXT_BY_ID,
  GET_TOP_BOOKS,
  GET_TOP_BOOKS_BY_AUTHOR,
  GET_TOP_BOOKS_BY_GENRE,
  LOAD_BOOKS,
  SEARCH_BOOKS,
  UPDATE_BOOK
} from "../actionTypes/books";



export const loadBooks = () => async (dispatch) => {
  try {
    const response = await axios.get(`/api/books`);
    dispatch({ type: LOAD_BOOKS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};


export const getBookById = (bookId) => async (dispatch) => {
  try {
    const source = axios.CancelToken.source();

    const response = await axios.get(`/api/books/${bookId}`, { cancelToken: source.token });
    dispatch({ type: GET_BOOK_BY_ID, payload: response.data });

    source.cancel();
  } catch (error) {
    if (axios.isCancel(error)) {
      return;
    }
    console.error(error);
  }
};


export const addBook = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/books', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ type: ADD_BOOK, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};


export const updateBook = (bookId, formData) => async (dispatch) => {
  try {
    const response = await axios.patch(`/api/books/${bookId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    dispatch({ type: UPDATE_BOOK, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};


export const deleteBook = (bookId) => async (dispatch) => {
  try {
    await axios.delete(`/api/books/${bookId}`);
    dispatch({ type: DELETE_BOOK, payload: { bookId } });
  } catch (error) {
    console.error(error);
  }
};


export const addReview = (bookId, reviewData) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/books/${bookId}/reviews`, reviewData);
    dispatch({ type: ADD_REVIEW, payload: response.data });
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch(setExistingReviewError(error.response.data.error));
    }
  }
};


export const setExistingReviewError = (error) => ({
  type: EXISTING_REVIEW_ERROR, payload: error
});


export const searchBooks = ({ author, genre, title }) => async (dispatch) => {
  try {
    const response = await axios.get('/api/books/search', {
      params: {
        author: author,
        genre: genre,
        bookTitle: title
      }
    });
    dispatch({ type: SEARCH_BOOKS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};


export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});


export const getTopBooks = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/books/top/all');
    dispatch({ type: GET_TOP_BOOKS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const getTopBooksByGenre = (genre) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/books/top/genre?genre=${genre}`);
    dispatch({ type: GET_TOP_BOOKS_BY_GENRE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const getTopBooksByAuthor = (author) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/books/top/author?author=${author}`);
    dispatch({ type: GET_TOP_BOOKS_BY_AUTHOR, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};


export const getBookTextById = (bookId) => async (dispatch) => {
  try {
    const source = axios.CancelToken.source();

    const response = await axios.get(`/api/books/${bookId}/text`, { cancelToken: source.token });
    dispatch({ type: GET_BOOK_TEXT_BY_ID, payload: response.data });

    source.cancel();
  } catch (error) {
    if (axios.isCancel(error)) {
      return;
    }
    console.error(error);
  }
};


export const downloadTextFileById = (bookId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/books/${bookId}/text/download`);
    const fileContent = response.data;

    dispatch({ type: DOWNLOAD_TEXT_FILE_BY_ID, payload: { fileContent } });

    return fileContent;
  } catch (error) {
    console.error(error);
    throw error;
  }
};