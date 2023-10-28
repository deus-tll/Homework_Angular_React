export const Line = ({ name, value }) => {
  return (
    <div className="d-flex justify-content-between">
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
};
