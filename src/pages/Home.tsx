import { FC } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

const Home: FC = () => {
  return (
    <header className="App-header">
      <Logo className="App-logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Home;
