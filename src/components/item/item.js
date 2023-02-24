const Item = ({ info }) => {
  const { title, poster_path } = info;

  console.log(info);
  const itemImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <article>
      <img src={itemImage} alt={title} width="200" height="300" />
      <p>{title}</p>
    </article>
  );
};

export default Item;
