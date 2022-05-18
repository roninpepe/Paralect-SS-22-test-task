import Home from 'pages/Home';
import PageLayout from 'pages/PageLayout';
import User from 'pages/User';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
