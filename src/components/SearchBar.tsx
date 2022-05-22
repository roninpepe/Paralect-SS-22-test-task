import { FC, KeyboardEventHandler, useEffect, useState } from 'react';
import { IElementProps } from 'types/paralect-ss-22-test-task';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import { history } from 'utils/history';
import { useParams } from 'react-router-dom';

const SearchBar: FC<IElementProps> = (props) => {
  const { className } = props;

  const { username: currentUsername } = useParams();

  const [username, setUsername] = useState<string>(`${currentUsername}`);

  const updateUrl: KeyboardEventHandler = (event) => {
    const target = event.target as HTMLInputElement;
    const { key } = event;
    const { value } = target;
    if (key === 'Enter') {
      history.push(`../${value}`);
      setUsername(value);
    }
  };

  useEffect(() => {}, [username]);

  return (
    <div className={`_bright search-bar ${className ?? ''}`}>
      <Search />
      <input
        autoFocus
        type="search"
        className="input search-bar__input"
        onKeyDown={updateUrl}
      />
    </div>
  );
};

export default SearchBar;
