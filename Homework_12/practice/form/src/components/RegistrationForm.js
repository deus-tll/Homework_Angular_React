import React, { Component } from "react";

export class RegistrationForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      gender: '',
      age: '',
      errors: {
        username: '',
        email: '',
        age: ''
      }
    };
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  validateUsername = (username) => {
    if (username.length < 1) {
      return 'Нікнейм повинен бути не менше 1-го символу';
    }
    return '';
  };

  validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      return 'Введіть електронну пошту в коректному форматі';
    }
    return '';
  };

  validateAge = (age) => {
    if (isNaN(age) || age < 18) {
      return 'Введіть правильний вік (більше 18)';
    }
    return '';
  };

  validation = () => {
    const { username, email, age } = this.state;
    const usernameError = this.validateUsername(username);
    const emailError = this.validateEmail(email);
    const ageError = this.validateAge(age);

    this.setState({
      errors: {
        username: usernameError,
        email: emailError,
        age: ageError
      }
    });

    return usernameError === '' && emailError === '' && ageError === '';
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validation()) {
      alert('Реєстрація пройшла успішно');
    }
  };

  render() {
    const { username, email, gender, age, errors } = this.state;

    return(
      <>
        <h1>Реєстрація</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Нікнейм:</label>
            <input className="form-control" type="text" name="username" value={username} onChange={this.handleInputChange}/>
            <p className="error">{errors.username ? '*' + errors.username : ''}</p>
          </div>

          <div>
            <label>Електронна адреса:</label>
            <input className="form-control" type="text" name="email" value={email} onChange={this.handleInputChange}/>
            <p className="error">{errors.email ? '*' + errors.email : ''}</p>
          </div>

          <div>
            <label>Стать:</label>
            <select className="form-control" name="gender" value={gender} onChange={this.handleInputChange}>
              <option value="male">Чоловік</option>
              <option value="female">Жінка</option>
              <option value="other">Інше</option>
            </select>
          </div>

          <div>
            <label>Вік:</label>
            <input className="form-control" type="number" name="age" value={age} onChange={this.handleInputChange} />
            <p className="error">{errors.age ? '*' + errors.age : ''}</p>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-dark" type="submit">Зареєструватися</button>
          </div>
        </form>
      </>
    );
  }
}