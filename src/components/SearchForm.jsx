import PropTypes from 'prop-types';

export default function SearchForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies..."
      />
      <button>Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
