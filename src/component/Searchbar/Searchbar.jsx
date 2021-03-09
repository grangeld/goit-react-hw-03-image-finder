import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  return (
    <header
      className="Searchbar"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(search);
      }}
    >
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={e => {
            setSearch(e.currentTarget.value);
          }}
        />
      </form>
    </header>
  );
};

export default Searchbar;
