const BandInfo = ({ name, members, pastMembers, albums }) => {
  return (
    <>
      <div className="w-100 p-5">
        <div className="d-flex">
          <h5>One of my fovorites band's name: <h1>{name}</h1></h5>
        </div>

        <div className="mt-4">
          <h5 className="text-center" >Members</h5>
          <ul className="list-group">
            {members.map((member, index) => (
              <li className="list-group-item bg-warning-subtle p-3" key={index}>
                <span className="fw-bold">{member}</span>:<br />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h5 className="text-center">Past Members</h5>
          <ul className="list-group">
            {pastMembers.map((member, index) => (
              <li className="list-group-item bg-warning-subtle p-3" key={index}>
                <span className="fw-bold">{member}</span>:<br />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-center">Albums</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2">
          {albums.map((album, index) => (
            <div key={index} className="col d-flex justify-content-center">
              <div className="block w-100 d-flex justify-content-center">
                <div className="album-cover d-block mt-3 ">
                  <div>
                    <img src={album.cover} alt="cover" />
                  </div>
                  <p className="mt-3 text-center">{album.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BandInfo;
