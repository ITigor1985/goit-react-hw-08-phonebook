import { Switch, Route } from 'react-router-dom';
import { ContactsPage } from 'pages/Contacts';
import { HomePage } from 'pages/Home';
import CreateContact from './CreateContact/CreateContact';
import { GlobalStyle } from '../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';
import Contact from './Contact';

export const App = () => {
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
        </Switch>
      </Container>
      <GlobalStyle />
    </>
  );
};
