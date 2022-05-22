import { FC } from 'react';
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { history } from 'utils/history';
import PageLayout from 'pages/PageLayout';
import Home from 'pages/Home';
import User from 'pages/User';

const AppRouter: FC = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path=":username" element={<User />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default AppRouter;
