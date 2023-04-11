import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/operetions/auth-operetions';
import PrivateRoute from './PrivateRoute/PrivatRoute';
import Home from 'Page/Home/Home';
import { getIsLoggedIn } from 'redux/selector/selectors';
import PublicRoute from './PublicRoute/PublicRoute';
import NotFaund from 'Page/NotFaund/NotFaund';
import Header from './Header/Header';
const Contacts = lazy(() => import('./Contacts/Contacts'));
const AuthUserComponent = lazy(() =>
  import('./AuthUserComponent/AuthUserComponent')
);

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={isLoggedIn === false && <Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="login" element={<AuthUserComponent />} />
            <Route path="register" element={<AuthUserComponent />} />
          </Route>
          <Route path="*" element={<NotFaund />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
