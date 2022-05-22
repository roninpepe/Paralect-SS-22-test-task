import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProfileAPIRequestStatus } from 'types/paralect-ss-22-test-task';
import { getProfile } from 'api/profile/get';
import Loading from 'components/Stubs/Loading';
import Profile from 'components/Profile';
import Repositories from 'components/Repositories';
import NoUser from 'components/Stubs/NoUser';

const User: FC = () => {
  const { username } = useParams();

  const [profileAPIRequestStatus, setProfileAPIRequestStatus] =
    useState<IProfileAPIRequestStatus>({ pending: true, status: false });

  useEffect(() => {
    setProfileAPIRequestStatus({ pending: true, status: false });
    getProfile(`${username}`).then(
      (result) => {
        setProfileAPIRequestStatus({
          pending: false,
          status: result.status,
          response: result.response,
        });
      },
      () => {
        setProfileAPIRequestStatus({ pending: false, status: false });
      }
    );
  }, [username]);
  useEffect(() => {}, [profileAPIRequestStatus]);

  if (profileAPIRequestStatus.pending) {
    return (
      <div className="app__page page app__user user">
        <Loading />
      </div>
    );
  }

  if (profileAPIRequestStatus.status && profileAPIRequestStatus.response) {
    const {
      avatar_url: avatar,
      name,
      html_url: url,
      login,
      followers,
      following,
    } = profileAPIRequestStatus.response;

    return (
      <div className="app__page page app__user user">
        <Profile
          avatar_url={avatar}
          name={name}
          html_url={url}
          login={login}
          followers={followers}
          following={following}
        />
        <Repositories login={login} />
      </div>
    );
  }

  return (
    <div className="app__page page app__user user">
      <NoUser />
    </div>
  );
};

export default User;
