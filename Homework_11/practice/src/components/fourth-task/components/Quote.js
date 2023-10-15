import React, { Component } from "react";

class Quote extends Component {
  render() {
    const { text, author } = this.props;

    return (
      <>
        <div className="block">
          <h5 className="text-center">Цитата</h5>
          <p>{text}</p>
        </div>

        <div className="block">
          <div className="d-flex justify-content-between w-100">
            <p>Автор:</p>
            <p>{author.name}</p>
          </div>

          <div className="mt-4">
            <h5 className="text-center">Інформація про автора</h5>
            <p>{author.info}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Quote;