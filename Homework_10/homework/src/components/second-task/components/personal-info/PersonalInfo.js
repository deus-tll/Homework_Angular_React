export const PersonalInfo = ({photo, name, lastName, patronymic, phoneNumber, country, city, about}) => {
  return(
    <>
      <div class="col-lg-12 d-block block">
      <h2 class="text-center">Персональна інформація</h2>
      <div class="d-flex p-4 ">
        <div class="col-lg-4 d-flex flex-column align-items-center">
          <img src={photo} alt="portrait"/>
        </div>
        <div id="info" class="col-lg-8 d-flex flex-column">
          <div class="d-flex justify-content-between w-100 ">
            <p>ПІБ:</p>
            <p>{name} {lastName} {patronymic}</p>
          </div>

          <div class="d-flex justify-content-between w-100">
            <p>Номер телефону:</p>
            <p>{phoneNumber}</p>
          </div>

          <div class="d-flex justify-content-between w-100">
            <p>Місце:</p>
            <p>{country}, {city}</p>
          </div>

          <div class="mt-4">
            <h4>Про мене</h4>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};