const Film = ({ movie, slide }) => {
  const { id, name, release_date, image_url } = movie;
  return (
    <li
      className="film"
      id={id}
      style={{
        transform: `translateX(${slide}px)`,
        transition: "0.5s ease",
      }}
    />
  );
};

export default Film;
