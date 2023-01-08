import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import PrivateRoutes from './Auth/PrivateRoutes';
import Register from './Auth/Register';
import { ROUTES } from './constants';
import DefaultLayout from './Layout/DefaultLayout';
import { publicRoutes } from './Routes';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Component = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
          </Route>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
