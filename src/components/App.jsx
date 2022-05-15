import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactsPage } from 'pages/Contacts';
import { HomePage } from 'pages/Home';
import CreateContact from './CreateContact/CreateContact';
import { GlobalStyle } from '../GlobalStyled/GlobalStyled.styled';
import { Container } from './App.styled';
import Contact from './Contact';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import { authSelectors } from 'redux/auth';
import PublicRoute from 'route/PublicRoute';
import PrivateRoute from 'route/PrivatRoute';
import AppBar from './AppBar';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        {isFetchingUser ? (
          <div style={{ margin: '0 auto' }}>Loading...</div>
        ) : (
          <>
            <AppBar />
            <Routes>
              <Route
                exect
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contacts/create"
                element={
                  <PrivateRoute>
                    <CreateContact />
                  </PrivateRoute>
                }
              />

              <Route
                path="/contacts/:id"
                element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </Container>
      <GlobalStyle />
    </>
  );
};
