export const EditInfo = ({
  editedInfo,
  handleInputChange,
  handleSaveClick,
  handleCancelClick,
}) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        className="form-control mt-2 mb-2"
        value={editedInfo.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        className="form-control mt-2 mb-2"
        value={editedInfo.lastName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="patronymic"
        className="form-control mt-2 mb-2"
        value={editedInfo.patronymic}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phoneNumber"
        className="form-control mt-2 mb-2"
        value={editedInfo.phoneNumber}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="country"
        className="form-control mt-2 mb-2"
        value={editedInfo.country}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="city"
        className="form-control mt-2 mb-2"
        value={editedInfo.city}
        onChange={handleInputChange}
      />
      <button className="btn btn-dark m-2" onClick={handleSaveClick}>
        Зберегти
      </button>
      <button className="btn btn-dark" onClick={handleCancelClick}>
        Скасувати
      </button>
    </div>
  );
};