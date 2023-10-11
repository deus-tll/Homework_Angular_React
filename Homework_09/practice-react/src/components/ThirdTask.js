const ThirdTask = () => {
  const name = 'Artem';
  const surname = 'Miller';
  const patronymic = 'Valeriyovich';

  const phoneNumber = '+380958171340';

  const email = 'millerartem.work@gmail.com';

  return (
    <>
      <h1>Песональна Інформація</h1>
      <div>
        <div className="d-flex justify-content-between">
          <p>ПІБ:</p>
          <p>{name} {surname} {patronymic}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Номер телефону:</p>
          <p>{phoneNumber}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Електронна пошта:</p>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};

export default ThirdTask;