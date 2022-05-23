import {
  FormInput,
  InputLabel,
} from 'components/NewContactForm/NewContactForm.styled';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Container, Title } from './LoginView.styled';
import Button from 'components/Buttons';

const initialState = {
  email: '',
  password: '',
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = () => {
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title>Login page</Title>
      <Container>
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
          <Form autoComplete="off">
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

            <Button type="submit" text="Login" />
          </Form>
        </Formik>
      </Container>
    </>
  );
}
