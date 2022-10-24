import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/cart" element={<h2>Cart</h2>} />
      </Route>
    </Routes>
  );
}
