import PropTypes from 'prop-types';
import { SearchBlock, Field, Search } from './SearchForm.styled';

export default function SearchForm({ handleSubmit }) {
  return (
    <SearchBlock onSubmit={handleSubmit}>
      <Field
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies..."
      />
      <Search>Search</Search>
    </SearchBlock>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
