import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      <span className={styles.text}>find contacts by name</span>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        type="text"
        name="filter"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
