import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { ROUTES } from './constants';
import ProductPage from './pages/Products';
import ProductDetail from './pages/Products/Detail';
import Admin from './Auth/Admin';
import { publicRoutes } from './Routes';
import DefaultLayout from './Layout/DefaultLayout';
import { Fragment } from 'react';
import PrivateRoutes from './Auth/PrivateRoutes';
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
          {/* <Route path="/" element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={ROUTES.ADMIN} element={<Admin />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
