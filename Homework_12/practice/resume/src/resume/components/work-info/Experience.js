export const Experience = ({ experiences, certificates }) => {
  return (
    <>
      <div className="d-flex flex-column block pe-1 ps-1 pb-2 col-lg-6">
        <h3 className="text-center">Досвід</h3>
        <ul className="list-group">
          {experiences.map((experience, index) => (
            <li className="list-group-item bg-warning-subtle p-3" key={index}>
              <div class="d-flex justify-content-between">
                <div class="col-lg-3">
                  <p>
                    { experience.dateFrom.toLocaleDateString() } - { experience.dateTo === 'Now' ? 'Now' : experience.dateTo.toLocaleDateString() } :{" "}
                  </p>
                </div>
                <div class="col-lg-8">
                  <p>{ experience.text }</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div class="d-flex flex-column block pe-1 ps-1 pb-2 col-lg-6">
        <h3 class="text-center">Сертифікати</h3>
        <ul className="list-group">
          {certificates.map((certificate, index) => (
            <li className="list-group-item bg-warning-subtle p-3" key={index}>
              <div class="d-flex justify-content-between">
                <div class="col-lg-3">
                  <p>{ certificate.date.toLocaleDateString() } : </p>
                </div>
                <div class="col-lg-8">
                  <p>
                    { certificate.text } | <a href={certificate.url}>Badge link</a>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
