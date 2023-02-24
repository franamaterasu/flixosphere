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
    </header>
  );
};

export default Header;
