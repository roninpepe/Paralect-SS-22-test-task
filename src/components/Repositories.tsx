import { FC, useEffect, useState } from 'react';
import {
  IRepositoriesProps,
  IRepositoriesAPIRequestStatus,
} from 'types/paralect-ss-22-test-task';
import { nFormatter } from 'utils/utils';
import { getRepositories } from 'api/repositories/get';
import Loading from 'components/Stubs/Loading';
import RepositoriesPagination from 'components/Repositories/Pagination';
import NoRepositories from 'components/Stubs/NoRepositories';

const Repositories: FC<IRepositoriesProps> = (props) => {
  const { login: username } = props;

  const [repositoriesAPIRequestStatus, setRepositoriesAPIRequestStatus] =
    useState<IRepositoriesAPIRequestStatus>({ pending: true, status: false });

  useEffect(() => {
    setRepositoriesAPIRequestStatus({ pending: true, status: false });
    getRepositories(username).then(
      (result) => {
        setRepositoriesAPIRequestStatus({
          pending: false,
          status: result.status,
          response: result.response,
        });
      },
      () => {
        setRepositoriesAPIRequestStatus({ pending: false, status: false });
      }
    );
  }, [username]);
  useEffect(() => {}, [repositoriesAPIRequestStatus]);

  if (repositoriesAPIRequestStatus.pending) {
    return (
      <div className="user__repositories repositories">
        <Loading />;
      </div>
    );
  }

  if (
    repositoriesAPIRequestStatus.status &&
    repositoriesAPIRequestStatus.response &&
    repositoriesAPIRequestStatus.response.length > 0
  ) {
    const repositories = repositoriesAPIRequestStatus.response;

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
};

export default Repositories;
