import { FC } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

const Header: FC = () => {
  return (
    <div className="app__header header _prominent">
      <Link to="/" className="header__logo _interactive">
        <Logo />
      </Link>
      <SearchBar className="header__search-bar" />
    </div>
  );
};

export default Header;
