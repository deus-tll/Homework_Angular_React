import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { RootLayout } from './components/service-components/RootLayout';
import { EventsList } from './components/pages/EventsList';
import { FavoriteEventsList } from './components/pages/FavoriteEventsList';
import { EventDetails } from './components/pages/EventDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout/>,
      children: [
        {path: '/', element: <EventsList/>},
        {path: '/favorite-events-list', element: <FavoriteEventsList/>},
        {path: '/event/:id', element: <EventDetails/>},
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;