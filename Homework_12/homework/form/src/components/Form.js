import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    photo: null,
    description: "",
    tags: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Введіть нік";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Мінімальна довжина паролю 6 символів";
    }

    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = "Введіть коректну електронну адресу";
    }

    if (!formData.photo) {
      newErrors.photo = "Оберіть фотографію";
    }

    if (formData.tags && !/^\w+(,\s*\w+)*$/.test(formData.tags)) {
      newErrors.tags = "Введіть правильний формат тегів";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert("Форма заповнена успішно!");
    }
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "file" ? event.target.files[0] : event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2>Форма завантаження фотографії</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Нік:</label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div>
          <label>Пароль:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <label>Електронна адреса:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Фотографія:</label>
          <input 
            className="form-control"
            type="file" 
            name="photo" 
            onChange={handleInputChange}
          />
          {errors.photo && <p className="error">{errors.photo}</p>}
        </div>

        <div>
          <label>Опис фотографії:</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Теги (розділені комою):</label>
          <input
            className="form-control"
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
          />
          {errors.tags && <p className="error">{errors.tags}</p>}
        </div>

        <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-dark" type="submit">Відправити форму</button>
          </div>
      </form>
    </>
  );
};
