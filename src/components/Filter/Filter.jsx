import styles from '../Filter/Filter.module.css';
import { filterContact } from 'redux/contacts/contacts-slice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(filterContact(evt.target.value));
  };
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        value={filter}
        type="text"
        onChange={onChange}
        name="filter"
      />
    </label>
  );
};

