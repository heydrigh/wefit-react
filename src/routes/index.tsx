import Cart from '@pages/Cart';
import Home from '@pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ShopEnd from '@pages/ShopEnd';
import { RoutesEnum } from './routes';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.Cart} element={<Cart />} />
        <Route path={RoutesEnum.ShopEnd} element={<ShopEnd />} />
      </Routes>
    </BrowserRouter>
  );
}
