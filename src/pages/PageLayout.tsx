import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout: FC = () => (
  <>
    <Outlet />
  </>
);

export default PageLayout;
