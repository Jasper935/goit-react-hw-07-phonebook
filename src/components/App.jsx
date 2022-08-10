import { Filter } from './Filter/Filter';
import { Form } from '../components/Form/Form';
import { Section } from './Section/Section';

import { ContactsList } from './ContactsList/ContactsList';
import { useSelector } from 'react-redux';
export const App = () => {
  const loader = useSelector(state => state.contacts.loading);
  console.log(loader);
  return (
    <>
      <Section title={'PhoneBook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList/>
        {loader&&<h2>Loading...</h2>}
      </Section>
    </>
  );
};
