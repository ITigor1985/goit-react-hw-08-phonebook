import { toast, ToastContainer } from 'react-toastify';
import { IconContext } from 'react-icons';
import { ImPhone } from 'react-icons/im';
import 'react-toastify/dist/ReactToastify.css';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice/contactSlice';
import Button from 'components/Buttons/Button';
import { Formik, Field, Form } from 'formik';
import {
  FormInput,
  InputLabel,
  Title,
  Container,
  ListBtn,
  BtnGoContact,
} from './NewContactForm.styled';
import { Spinner } from 'components/Spinner/Spinner';
//import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialState = {
  name: '',
  number: '',
};

const positionToast = () => {
  return { position: toast.POSITION.TOP_CENTER };
};

export const NewContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      toast.warn('is already in contacts', positionToast());
      return;
    }

    createContact({ name, number });

    resetForm();
    toast.success('Contacts create!', positionToast());
  };

  return (
    <>
      {isLoading && <Spinner />}
      {/* {isSuccess && <Redirect to="/contacts" />} */}
      <Title>Create contact</Title>
      <Container>
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
          <Form autoComplete="off">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Field
              as={FormInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />

            <InputLabel htmlFor="number">Phone number</InputLabel>
            <Field
              as={FormInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <Button type="submit" text="Add contact" />
          </Form>
        </Formik>
      </Container>
      <ListBtn>
        <li>
          <IconContext.Provider value={{ color: 'blue', size: '25px' }}>
            <BtnGoContact type="button">
              <Link to="/contacts">
                <ImPhone />
              </Link>
            </BtnGoContact>
          </IconContext.Provider>
        </li>
      </ListBtn>
      <ToastContainer />
    </>
  );
};
