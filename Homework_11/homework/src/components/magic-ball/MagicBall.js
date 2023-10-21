import React, { Component } from "react";

export class MagicBall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      predictions: [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Reply hazy, try again",
        "Concentrate and ask again",
        "Don’t count on it",
        "My reply is no",
        "Outlook not so good",
        "Very doubtful",
      ],
      prediction: null,
    };
  }

  makePrediction = () => {
    const { predictions } = this.state;
    const prediction =
      predictions[Math.floor(Math.random() * predictions.length)];
    this.setState({ prediction });
  };

  render() {
    const { prediction } = this.state;
    const image = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png";

    return (
      <>
        <h1 className="text-center">Magic Ball</h1>
        <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <img
            style={{ height: 400, cursor: "pointer" }}
            src={image}
            alt=""
            onClick={this.makePrediction}
          />
        </div>

        <div className="d-flex justify-content-center mt-5 mb-5">
          {prediction && (
            <div className="d-flex justify-content-center align-items-center prediction">
              <h3>{prediction}</h3>
            </div>
          )}
        </div>
      </>
    );
  }
}