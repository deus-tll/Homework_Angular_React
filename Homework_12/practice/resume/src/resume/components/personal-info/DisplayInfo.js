export const DisplayInfo = ({ editedInfo, handleEditClick }) => {
  return (
    <div className="d-flex p-4">
      <div className="col-lg-4 d-flex flex-column align-items-center">
        <img src={editedInfo.photo} alt="portrait" />
      </div>
      <div id="info" className="col-lg-8 d-flex flex-column">
        <div className="d-flex justify-content-between w-100">
          <p>ПІБ:</p>
          <p>
            {editedInfo.name} {editedInfo.lastName} {editedInfo.patronymic}
          </p>
        </div>
        <div className="d-flex justify-content-between w-100">
          <p>Номер телефону:</p>
          <p>{editedInfo.phoneNumber}</p>
        </div>
        <div className="d-flex justify-content-between w-100">
          <p>Місце:</p>
          <p>
            {editedInfo.country}, {editedInfo.city}
          </p>
        </div>
        <button className="btn btn-dark" onClick={handleEditClick}>
          Редагувати
        </button>
      </div>
    </div>
  );
};