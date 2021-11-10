import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions';

function Filter({ value, handleChange }) {
  return (
    <>
      <TextField
        id="standard-search"
        label="Find contacts by name"
        type="search"
        variant="standard"
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  handlChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.filter,
});
const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(setFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
