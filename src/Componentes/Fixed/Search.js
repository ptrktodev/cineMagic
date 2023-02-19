import React from "react";
import "./Search.css";
import SearchPage from "../SearchPage/SearchPage";

const Search = ({ title }) => {
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState([]);

  function onChange({ target }) {
    setValue(target.value);
  }

  React.useEffect(() => {
    async function api() {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const url = `https://api.themoviedb.org/3/search/${title}?api_key=`;
      const response = await fetch(`${url}${key}&query=${value}`);
      const { results } = await response.json();
      setSearch(results);
      console.log(search);
    }
    api();
  }, [value]);

  function limparInput() {
    setValue("");
  }

  return (
    <section className="group">
      <div className="Search">
        <input
          placeholder={`Search ${title}`}
          type="text"
          className="input"
          value={value}
          onChange={onChange}
        />
        <span class="icon" onClick={limparInput}>
          &#x2715;
        </span>
      </div>
      <div className="results">
        {search && <SearchPage category={title} results={search} />}
      </div>
    </section>
  );
};

export default Search;
