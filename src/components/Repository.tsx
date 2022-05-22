import { FC } from 'react';
import { IRepositoryProps } from 'types/paralect-ss-22-test-task';

const Repository: FC<IRepositoryProps> = (props) => {
  const { html_url: url, name, description } = props;
  return (
    <a
      className="repositories__repository repository _bright"
      href={url}
      target="_blank"
    >
      <div className="repository__name link">{name}</div>
      <div className="repository__description">{description}</div>
    </a>
  );
};

export default Repository;
