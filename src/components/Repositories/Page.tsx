import { FC } from 'react';
import {
  IRepositoriesPaginationProps,
  IRepository,
} from 'types/paralect-ss-22-test-task';
import Repository from 'components/Repository';

const RepositoriesPage: FC<IRepositoriesPaginationProps> = (props) => {
  const { repositories } = props;

  return (
    <div className="repositories__current-items">
      {repositories &&
        repositories.map((repository: IRepository, index: number) => {
          const { html_url: url, name, description } = repository;

          return (
            <Repository
              key={`${index}`}
              html_url={url}
              name={name}
              description={description}
            />
          );
        })}
    </div>
  );
};

export default RepositoriesPage;
