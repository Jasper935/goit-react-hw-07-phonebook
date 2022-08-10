import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { fetchContacts, deleteContact } from 'redux/contacts/contacts-operations';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
