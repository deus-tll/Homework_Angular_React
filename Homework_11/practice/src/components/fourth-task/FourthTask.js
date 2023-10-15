import React, { Component } from "react";
import Quote from './components/Quote'

class FourthTask extends Component {
  constructor() {
    super();

    const authors = [
      { id: 1, name: 'Вінстон Черчилль', info: "Прем’єр-міністр, політичний і державний діяч Великобританії, лауреат Нобелівської премії, письменник. Народився Уїнстон Черчілль 30 листопада 1874 року в Бленхейме, графство Оксфордшир до багатої і впливової сім’ї. До восьми років в біографії Вінстона Черчілля його вихованням займалася няня. А потім його віддали вчитися в школу Сент-Джордж, пізніше перевели в школу в Барайтоне. Черчілль навчався в школі Херроу, де крім знань отримав відмінні навички у фехтуванні. А в 1893 році почав учитися в Королівському військовому училищі, по закінченні якого отримав звання молодшого лейтенанта."},
      { id: 2, name: 'Генрі Форд', info: "Один з передових промисловців Америки, докорінно змінив принцип роботи конвеєрного складання автомобілів. У 1908 Генрі Форд створив автомобіль Ford Model Т і після цього продовжив покращувати свій спосіб конвеерного складання автомобілів, який надалі докорінно змінив всю промисловість. В результаті Форд продав мільйони автомобілів і став всесвітньо відомим керівником компанії."},
    ];

    const quotes = [
      { text: 'Успіх — це вміння рухатись від невдачі до невдачі, не втрачаючи ентузіазму.', authorId: 1},
      { text: 'Коли все, здається, йде проти вас, пам’ятайте, що літак злітає проти вітру, а не з ним.', authorId: 2}
    ];

    this.state = {
      currentQuoteId: 1,
      authors: authors,
      quotes: quotes
    };
  }

  getRandomQuote = () => {
    const { quotes } = this.state;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.setState({ currentQuoteId: quotes[randomIndex].authorId });
  };

  render() {
    const { quotes, authors, currentQuoteId } = this.state;
    const currentQuote = quotes.find((quote) => quote.authorId === currentQuoteId);
    const author = authors.find((a) => a.id === currentQuote.authorId);

    return (
      <>
        <h1 className="text-center">Цитата дня</h1>
        <div className="d-flex justify-content-center mt-4 mb-4">
          <button className="btn btn-dark w-25" onClick={this.getRandomQuote}>Отримати</button>
        </div>
        <Quote text={currentQuote.text} author={author}/>
      </>
    );
  }
};

export default FourthTask;