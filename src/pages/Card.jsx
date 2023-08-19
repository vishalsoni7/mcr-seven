export const Card = ({ id, name, image }) => {
  return (
    <div key={id}>
      <img src={image} />
      <p>
        <b> {name} </b>{" "}
      </p>
    </div>
  );
};
