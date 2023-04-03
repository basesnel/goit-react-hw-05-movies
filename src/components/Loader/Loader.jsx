import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { LoaderBlock } from './Loader.styled';

export default function Loader({ searchQuery }) {
  return (
    <LoaderBlock>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <p>{searchQuery}</p>
    </LoaderBlock>
  );
}

Loader.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
