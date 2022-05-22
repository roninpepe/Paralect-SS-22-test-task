import { FC } from 'react';
import { ReactComponent as User } from 'assets/icons/user.svg';

const NoUser: FC = () => {
  return (
    <div className="_secondary stub page__stub">
      <User />
      <span className="stub__label">User not found</span>
    </div>
  );
};

export default NoUser;
