import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './components/RootLayout';
import { About } from './components/app-components/About';
import { FamousPainting } from './components/app-components/FamousPainting';
import { PaintingList } from './components/app-components/PaintingList';


function App() {
  const artistInfo = {
    name: 'Vincent Willem van Gogh',
    born: '30 March 1853',
    died: '29 July 1890',
    movement: 'Post-Impressionism',
    biography: "Vincent Willem van Gogh (Dutch: [ˈvɪnsɛnt ˈʋɪləɱ vɑŋ ˈɣɔx] ; 30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created approximately 2100 artworks, including around 860 oil paintings, most of them in the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold, symbolic colours, and dramatic, impulsive and highly expressive brushwork that contributed to the foundations of modern art. Only one of his paintings was known by name to have been sold during his lifetime. Van Gogh became famous after his suicide, aged 37, which followed years of poverty and mental illness.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/474px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg'
  };

  const famousPainting = {
    name: 'The Starry Night',
    year: 1889,
    medium: 'Oil on canvas',
    location: 'Museum of Modern Art, New York',
    description: "The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh's magnum opus,The Starry Night is one of the most recognizable paintings in Western art.",
    painting: 'https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg'
  };

  const paintings = [
    {
      painting: famousPainting.painting,
      name: famousPainting.name
    },
    {
      painting: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg',
      name: 'Café Terrace at Night'
    },
    {
      painting: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Vincent_Willem_van_Gogh_127.jpg',
      name: 'Sunflowers'
    },
    {
      painting: 'https://cdn.britannica.com/57/211157-050-06EC285B/Vincent-van-Gogh-The-Potato-Eaters-1885-Van-Gogh-Museum-Amsterdam.jpg',
      name: 'The Potato Eaters'
    }
  ];

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout/>,
      children: [
        { path: '/', element: <About artist={artistInfo} />},
        { path: '/famous-painting', element: <FamousPainting famousPainting={famousPainting} />},
        { path: '/painting-list', element: <PaintingList paintings={paintings}/>}
      ]
    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App;