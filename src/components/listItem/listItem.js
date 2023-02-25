const ListItem = ({ info }) => {
  const { title, backdrop_path } = info;
  const itemImage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return (
    <li>
      <img src={itemImage} alt={title} width="150" height="100" />
      <span>{title}</span>
    </li>
  );
};

export default ListItem;
