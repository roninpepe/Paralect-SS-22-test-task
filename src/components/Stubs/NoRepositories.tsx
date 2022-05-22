import { FC } from 'react';
import { ReactComponent as Repository } from 'assets/icons/repository.svg';

const NoRepositories: FC = () => {
  return (
    <div className="_secondary stub page__stub">
      <Repository />
      <span className="stub__label">Repository list is empty</span>
    </div>
  );
};

export default NoRepositories;
