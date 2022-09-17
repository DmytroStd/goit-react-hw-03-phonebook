import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <>
      <li className={styles.item}>
        {`${name} : ${number}`}
        <button className={styles.btn} onClick={() => onDeleteContact(id)}>
          delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
  id: PropTypes.string,
};

export default ContactListItem;
