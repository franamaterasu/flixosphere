import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Header = () => {
  const { setSearchValue } = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearchValue(form.filmName.value);
  };

  return (
    <header>
      <span>FLIXOSPHERE</span>
      <form onSubmit={handleSubmit}>
        <input
          id="filmName"
          name="filmName"
          type="text"
          placeholder="Search your favourite film"
        />
        <button type="submit">Search</button>
      </form>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watch-more-later">Pending</Link>
      </nav>
    </header>
  );
};

export default Header;
