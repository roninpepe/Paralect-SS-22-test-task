import { FC } from 'react';
import { ReactComponent as Search } from 'assets/icons/search.svg';

const Start: FC = () => {
  return (
    <div className="_secondary stub page__stub">
      <Search />
      <span className="stub__label">
        Start with searching
        <br />a GitHub user
      </span>
    </div>
  );
};

export default Start;
