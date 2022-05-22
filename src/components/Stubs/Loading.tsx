import { FC } from 'react';
import { ReactComponent as Spinner } from 'assets/icons/spinner.svg';

const Loading: FC = () => {
  return (
    <div className="_secondary stub page__stub">
      <Spinner />
    </div>
  );
};

export default Loading;
