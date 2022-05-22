import { FC, useEffect, useState } from 'react';
import {
  IRepositoriesProps,
  IRepositoriesAPIResponse,
} from 'types/paralect-ss-22-test-task';
import RepositoriesPagination from 'components/Repositories/Pagination';
import NoRepositories from 'components/Stubs/NoRepositories';
import Loading from 'components/Stubs/Loading';

import repositoriesMockData from 'data/repositories.json';
import { nFormatter } from 'utils/utils';

const mock = {
  status: true,
  response: repositoriesMockData,
};

const Repositories: FC<IRepositoriesProps> = (props) => {
  const { login } = props;

  const [repositoriesAPIResponse, setRepositoriesAPIResponse] =
    useState<IRepositoriesAPIResponse>();

  useEffect(() => {
    setRepositoriesAPIResponse(mock);
  }, [repositoriesAPIResponse]);

  if (repositoriesAPIResponse?.response) {
    const repositories = repositoriesAPIResponse.response;

    if (repositories.length > 0) {
      return (
        <div className="user__repositories repositories">
          <div className="repositories__header">
            Repositories ({nFormatter(repositories.length)})
          </div>
          <RepositoriesPagination repositories={repositories} />
        </div>
      );
    }

    return (
      <div className="user__repositories repositories">
        <NoRepositories />
      </div>
    );
  }

  if (repositoriesAPIResponse?.status === false) {
    return (
      <div className="user__repositories repositories">
        <NoRepositories />
      </div>
    );
  }

  return (
    <div className="user__repositories repositories">
      <Loading />;
    </div>
  );
};

export default Repositories;
