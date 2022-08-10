import { ContactsItem } from 'components/ContactsItem/ContactsItem';

import { deleteContact } from 'redux/contacts/contacts-slice';
import { useDispatch, useSelector } from 'react-redux';
export const ContactsList = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);


  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ul>
        {filterContacts().map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        ))}
      </ul>
    </>
  );
};
