import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { ROUTES } from './constants';
import ProductPage from './pages/Products';
import ProductDetail from './pages/Products/Detail';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
