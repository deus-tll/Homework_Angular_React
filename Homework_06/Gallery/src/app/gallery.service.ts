import { Injectable } from '@angular/core';
import { Painting } from './models/painting.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  private paintings: Painting[] = [
    {
      id: 1,
      name: 'The Starry Night',
      year: 1889,
      author: 'Vincent van Gogh',
      height: 74,
      width: 92,
      location: 'The Museum of Modern Art',
      url: 'https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg'
    },
    {
      id: 2,
      name: 'Mona Lisa',
      year: 1503,
      author: 'Leonardo da Vinci',
      height: 77,
      width: 53,
      location: 'Louvre Museum',
      url: 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg'
    },
    {
      id: 3,
      name: 'Girl with a Pearl Earring',
      year: 1665,
      author: 'Johannes Vermeer',
      height: 44,
      width: 39,
      location: 'Rijksmuseum, Mauritshuis',
      url: 'https://cdn.britannica.com/33/194733-050-4CF75F31/Girl-with-a-Pearl-Earring-canvas-Johannes-1665.jpg'
    },
    {
      id: 4,
      name: 'The Art of Painting',
      year: 1668,
      author: 'Johannes Vermeer',
      height: 120,
      width: 100,
      location: '	Kunsthistorisches Museum, Vienna',
      url: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*VpM4INuXxGlUZthwjAa3Gg.jpeg'
    },
    {
      id: 5,
      name: 'The Last Supper',
      year: 1498,
      author: 'Leonardo da Vinci',
      height: 460,
      width: 880,
      location: 'Santa Maria delle Grazie',
      url: 'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg'
    },
    {
      id: 6,
      name: 'Café Terrace at Night',
      year: 1888,
      author: 'Vincent van Gogh',
      height: 81,
      width: 65,
      location: 'Kröller-Müller Museum',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg'
    },
    {
      id: 7,
      name: 'The Potato Eaters',
      year: 1885,
      author: 'Vincent van Gogh',
      height: 82,
      width: 114,
      location: 'Van Gogh Museum',
      url: 'https://cdn.britannica.com/57/211157-050-06EC285B/Vincent-van-Gogh-The-Potato-Eaters-1885-Van-Gogh-Museum-Amsterdam.jpg'
    },
  ];


  getPaintings() {
    return this.paintings;
  }

  getPaintingsByAuthor(author:string | undefined, ignoredId: number | undefined) {
    return this.paintings.filter(painting => painting.author === author && painting.id !== ignoredId);
  }

  getPaintingByIndex(id: number) {
    return this.paintings.find(painting => painting.id === id);
  }
}
