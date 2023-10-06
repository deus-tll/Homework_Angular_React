import { Injectable } from '@angular/core';
import { Wonder } from './models/wonder.model';

@Injectable({
  providedIn: 'root'
})
export class WondersService {

  constructor() { }

  private wonders: Wonder[] = [
    {
      name: "The Colosseum",
      description: "The Flavian Amphitheatre usually referred to as the Colosseum or Coliseum, is a spectacular amphitheatre that was constructed in Rome and inaugurated in AD. 80 by Titus, the son of Vespasian, for a hundred days of games that included gladiatorial battles and animal contests. It is one of the 7 Wonders of the World. Despite the fact that two-thirds of the original structure has been damaged over time, it is one of the most well-known tourist locations.",
      image: "https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/07/29134957/The-Colosseum-768x538.jpg",
    },
    {
      name: "Machu Picchu",
      description: "An Incan site in Peru called Machu Picchu was “found” by Hiram Bingham in 1911. It is one of the 7 Wonders of the World. It is close to the city of Cuzco. Vilcabamba, a covert Incan bastion used during the 16th-century revolt against Spanish domination, was what he thought it to be. It is one of the few recognized big pre-Columbian ruins that have been found almost intact.",
      image: "https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/07/29134954/Machu-Picchu-768x512.jpg",
    },
    {
      name: "Petra",
      description: "Petra is a remarkable historical and archaeological city in southern Jordan. It is also known as Raqmu or Rose City due to its colour. It is one of the 7 Wonders of the World. The Nabataean, a Bedouin Arab tribe that was native to the area in what is now southwest Jordan, is thought to have founded the city of Petra as a trade centre. Petra is situated around 150 miles south of Jerusalem and Amman, the capital of Jordan, and roughly halfway between Damascus, Syria, and the Red Sea, making it a centre of commerce in the region at the time.",
      image: "https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/07/29134945/petra-248x300.jpeg",
    },
    {
      name: "Taj Mahal",
      description: "Agra, India’s Taj Mahal is a marble mausoleum complex and one of the best examples of Mughal architecture. Shah Jahan (reigned 1628–58) built it in memory of his wife Mumtz Maal, known as “Chosen One of the Palace,” who passed away in 1631 while giving birth to their 14th child. It is one of the New 7 Wonder of the World. It is thought that 20,000 artisans worked on the Taj Mahal project under the direction of a board of architects who were knowledgeable at the time.",
      image: "https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/07/29134951/Taj-Mahal-300x207.jpg",
    },
    {
      name: "Cristo Redentor (OR) Christ the Redeemer Statue",
      description: "On Mount Corcovado in Rio de Janeiro, the Christ the Redeemer Statue, also known as Cristo Redentor, is a statue of Jesus in the Art Deco style. Heitor da Silva Costa designed the 130-foot statue, which is made of reinforced concrete and soapstone. Its construction cost about $250,000, the majority of which was obtained through contributions. It is 635 tonnes in weight and is situated on the Peak of Corcovado Mountain in the Tijuca Forest National Park, which provides views of Rio de Janeiro.",
      image: "https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/07/29134938/Christ-the-Redeemer-Statue-683x1024.jpg",
    },
    {
      name: "Great Wall of China",
      description: "The Great Wall of China is a work of engineering that is believed to be roughly 5,500 miles (8,850 km) long, however, the Chinese claim it is actually 13,170 kilometres long (21,200 km). The Great Wall of China was built over the course of two millennia, starting in the 7th century BCE. The goals of this spectacular organisation at the time included management of trade and emigration, border control, imposition of tariffs on Silk Road trade, and defence.",
      image: "https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/07/29134932/Great-Wall-of-China-768x518.jpg",
    },
    {
      name: "Chichén Itzá",
      description: "A Mayan metropolis in Mexico is called Chichen Itza. It is located on the Yucatán Peninsula, which had great prosperity in the ninth and tenth centuries A.D. The mythological great cities, or Tollans, that are mentioned in later Mesoamerican literature are also thought to include Chichen Itza. The city’s ruins contain religious structures from the Maya Civilization, like as the Temple of Kukulkán, which has 365 steps, one for each day of the Haab solar calendar.",
      image: "https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/07/29135623/Chichen-Itza1-300x251.jpg",
    },
  ];

  getWonders = () => this.wonders;
}
