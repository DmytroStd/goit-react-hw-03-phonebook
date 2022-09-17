import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactList.module.css';
import ContactListItem from '../contact-item/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={styles.list}>
        {contacts?.map(contact => (
          <ContactListItem
            key={nanoid()}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
