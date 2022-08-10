import { addContact } from 'redux/contacts/contacts-operations';

import styles from '../Form/Form.module.css';
import { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
export const Form = () => {
 
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setnumber] = useState('');
console.log(contacts);
  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setnumber(value);
        break;
      default:
        return '';
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();

    const isHere = contacts.some(el => el.name === name);

    if (isHere) {
      alert('have');
      return;
    }
   

    dispatch(addContact({ name, number }));

    setName('');
    setnumber('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label}>
        Name
        <input
          value={name}
          className={styles.input}
          type="text"
          name="name"
          required
          onChange={onChange}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input_last}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          type="tel"
          name="number"
          value={number}
          required
          onChange={onChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
