import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Container, Title } from './LoginView.styled';

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title>Page login</Title>
      <Container>
        <form onSubmit={handleSubmit} autoComplete="off">
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

          <button type="submit">LogIn</button>
        </form>
      </Container>
    </>
  );
}
