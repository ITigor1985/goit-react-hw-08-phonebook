import {
  FormInput,
  InputLabel,
} from 'components/NewContactForm/NewContactForm.styled';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Container, Title } from './RegisterView.styled';
import Button from 'components/Buttons';

// const styles = {
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = () => {
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title>Registration page</Title>
      <Container>
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
          <Form autoComplete="off">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Field
              as={FormInput}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
            <InputLabel htmlFor="email">Email</InputLabel>
            <Field
              as={FormInput}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />

            <InputLabel htmlFor="password">Password</InputLabel>
            <Field
              as={FormInput}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />

            <Button type="submit" text="Register" />
          </Form>
        </Formik>
        {/* <form onSubmit={handleSubmit} autoComplete="off">
          <label style={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </label>

          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Register</button>
        </form> */}
      </Container>
    </>
  );
}
