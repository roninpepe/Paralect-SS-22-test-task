import { FC } from 'react';
import { ReactComponent as Person } from 'assets/icons/person.svg';
import { ReactComponent as Group } from 'assets/icons/group.svg';
import { IProfileProps } from 'types/paralect-ss-22-test-task';
import { nFormatter } from 'utils/utils';

const Profile: FC<IProfileProps> = (props) => {
  const {
    avatar_url: avatar,
    name,
    html_url: url,
    login,
    followers,
    following,
  } = props;
  return (
    <div className="user__profile profile">
      <div className="profile__avatar-cont">
        <img
          src={avatar}
          alt={`${login}'s avatar`}
          className="profile__avatar"
        />
      </div>
      <div className="profile__info">
        <div className="profile__name">{name}</div>
        <div className="profile__login">
          <a href={url} target="_blank" className="profile__github-link">
            {login}
          </a>
        </div>
        <div className="profile__statistics">
          <span className="profile__statistics-item">
            <Person />
            {followers !== undefined ? nFormatter(followers) : '???'} follower
            {followers === 1 ? '' : 's'}
          </span>
          <span className="profile__statistics-item">
            <Group />
            {following !== undefined ? nFormatter(following) : '???'} following
            {following === 1 ? '' : 's'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
