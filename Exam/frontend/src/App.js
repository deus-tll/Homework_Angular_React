import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/routing/RootLayout";
import {Home} from "./components/Pages/Home/Home";
import {Ratings} from "./components/Pages/Ratings/Ratings";
import {BookDetails} from "./components/Pages/BookDetails/BookDetails";
import {ReadBook} from "./components/Pages/BookDetails/ReadBook";
import {AddBook} from "./components/Pages/AddBook/AddBook";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout/>,
      children: [
        { path: '/', element: <Home/> },
        { path: '/add-book', element: <AddBook/> },
        { path: '/ratings', element: <Ratings/> },
        { path: '/book/:id', element: <BookDetails/>},
        { path: '/book/:id/read', element: <ReadBook/> }
      ]
    }
  ]);

  return (
      <Provider store={store}>
        <RouterProvider router={router} basename={process.env.PUBLIC_URL} />
      </Provider>
  );
}

export default App;