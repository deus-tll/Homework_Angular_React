import { useState } from "react";

export const SearchForm = ({ onSearch, onClear }) => {
  const [searchParams, setSearchParams] = useState({
    author: "",
    genre: "",
    title: ""
  });

  const handleSearch = () => {
    onSearch(searchParams);
  };

  const handleClearSearch = () => {
    onClear();
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={searchParams.title}
          onChange={(e) =>
            setSearchParams({ ...searchParams, title: e.target.value })
          }
        />
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          value={searchParams.author}
          onChange={(e) =>
            setSearchParams({ ...searchParams, author: e.target.value })
          }
        />
        <input
          type="text"
          className="form-control"
          placeholder="Genre"
          value={searchParams.genre}
          onChange={(e) =>
            setSearchParams({ ...searchParams, genre: e.target.value })
          }
        />
        <button className="btn btn-dark" onClick={handleSearch}>
          Search
        </button>
        <button className="btn btn-secondary" onClick={handleClearSearch}>
          Clear
        </button>
      </div>
    </div>
  );
};