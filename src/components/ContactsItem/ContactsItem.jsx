import styles from '../ContactsItem/ContactsItem.module.css';
import PropTypes from 'prop-types';
export const ContactsItem = ({ name, number, onDelete, id }) => {
  return (
    <li className={styles.li}>
      <p className="">{name}</p>
      <p>{number}</p>
      <button type="button" className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  onDelete: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
