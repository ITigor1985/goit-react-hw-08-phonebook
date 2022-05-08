import { Switch, Route } from 'react-router-dom';
import { ContactsPage } from 'pages/Contacts';
import { HomePage } from 'pages/Home';
import CreateContact from './CreateContact/CreateContact';
import { GlobalStyle } from '../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';
import Contact from './Contact';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/contacts" exact>
            <ContactsPage />
          </Route>
          <Route path="/contacts/create">
            <CreateContact />
          </Route>
          <Route path="/contacts/:id">
            <Contact />
          </Route>
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
        </Switch>
      </Container>
      <GlobalStyle />
    </>
  );
};
