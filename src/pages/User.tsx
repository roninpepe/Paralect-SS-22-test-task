import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProfileAPIResponse } from 'types/paralect-ss-22-test-task';
import Profile from 'components/Profile';
import Repositories from 'components/Repositories';
import NoUser from 'components/Stubs/NoUser';
import Loading from 'components/Stubs/Loading';

import profileMockData from 'data/user.json';

const mock = { status: true, response: profileMockData };

const User: FC = () => {
  const { username } = useParams();

  const [profileAPIResponse, setProfileAPIResponse] =
    useState<IProfileAPIResponse>();

  useEffect(() => {
    setProfileAPIResponse(mock);
  }, [profileAPIResponse]);

  if (profileAPIResponse?.response) {
    const {
      avatar_url: avatar,
      name,
      html_url: url,
      login,
      followers,
      following,
    } = profileAPIResponse.response;

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

  if (profileAPIResponse?.status === false) {
    return (
      <div className="app__page page app__user user">
        <NoUser />
      </div>
    );
  }

  return (
    <div className="app__page page app__user user">
      <Loading />
    </div>
  );
};

export default User;
