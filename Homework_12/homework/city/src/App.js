import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';
import { AboutCity } from './components/pages/AboutCity';
import { FamousLandmark } from './components/pages/FamousLandmark';
import { LandmarkList } from './components/pages/LandmarkList';
import { CityPhoto } from './components/pages/CityPhoto';

function App() {
  const cityInfo = {
    name: 'Очаків',
    country: 'Україна',
    year: 1492,
    population: 14360,
    area: '12,49 км²',
    postIndex: 57500,
    coords: "46°37'07\" пн. ш. 31°32'21\" сх. д."
  };

  const cityPhoto = 'https://i.obozrevatel.com/gallery/2021/7/13/snimok-ekrana-2021-07-13-v-13-31-58.png';

  const famousLandmark = {
    name: 'Кінбурнська коса',
    description: [
      'Одне з найкрасивіших та найпопулярніших місць Миколаївської області - це Кінбурнська коса. Це непересічний куточок природи, який зберіг свою природну красу, багатство фауни та флори ще з давніх часів до наших днів.',
      'Кінбурнська коса представляє собою неповторну красу природи, яка складається з поєднання соснових лісів, просторих степів, прозорого моря та свіжого, морського повітря.',
      'На косі є великі піщані пляжі з білим піском, де панує тиша, спокій та повне злиття з природою. Тут немає гучних дискотек та атракціонів, але можна зустріти багато цікавих мешканців, таких як білі чаплі, пелікани, лебеді та качки, і навіть можна мати щастя побачити рожевих фламінго.'
    ],
    info: [
      'Коса розташована у північно-західній частині Кінбурнського півострова між Чорним морем та Дніпровсько-Бузьким лиманом. Довжина - 8,5 км, ширина у кореневій частині - 3,8 км. Територія коси належить до Чорноморського біосферного заповідника.',
      'Кінбурнська коса утворена природним комплексом нижньодніпровських пісків, які накопичилися в гирлі Дніпра ще з часів останнього зледеніння.'
    ],
    photo: 'https://inside-ua.com/files/places/kinburnska-kosa-1.1080x1350.jpg?41812b6719c8fe0e624d58f953e6f2d5'
  };

  const landmarks = [
    {
      name: famousLandmark.name,
      photo: famousLandmark.photo
    },
    {
      name: 'Острів Березань',
      photo: 'https://inside-ua.com/files/places/berezan-9.1080x1350.jpg?5f349b89ed1d48b53cd7ea86f4d23903'
    },
    {
      name: 'Свято-Миколаївський собор',
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%9E%D1%87%D0%B0%D0%BA%D1%96%D0%B2%29_04.jpg/1280px-%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%9E%D1%87%D0%B0%D0%BA%D1%96%D0%B2%29_04.jpg"
    },
    {
      name: "Пам'ятник О. В. Суворову",
      photo: "https://f.discover.ua/location/3555/QuYvu.jpg"
    },
    {
      name: 'Фонтан Від Вдячних Жителів Міста',
      photo: "http://lh3.googleusercontent.com/IRPZovp0HaNCO4Kh2ltI7pQ-FEsVrHjd1jDj8Gin_wHzhDhNzTY_F2rfqWy6kz2rfwdwoPbczWelXuD4XgXunlKRLDFb=s0"
    }
  ];

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout/>,
      children: [
        {path: '/', element: <AboutCity city={cityInfo}/>},
        {path: '/famous-landmark', element: <FamousLandmark landmark={famousLandmark}/>},
        {path: '/landmark-list', element: <LandmarkList landmarks={landmarks}/>},
        {path: '/city-photo', element: <CityPhoto image={cityPhoto}/>},
      ]
    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App;