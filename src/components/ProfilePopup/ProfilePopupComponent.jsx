import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { routes } from '../../routes/BaseRoutes';
import ProfileAvatar from '../ProfileAvatar';
import s from './ProfilePopup.module.scss';

const ProfilePopup = ({ user, handleLogout }) => {
  const { id, fullName, email, avatar } = user;

  return (
    <div className={s.container}>
      <div className={s.popupBox}>
        <ProfileAvatar size="x2" user={user} photo={avatar} />

        <ul className={s.info}>
          <li>{fullName}</li>
          <li>{email}</li>
          <li>
            <Link
              to={generatePath(routes.USER, { id })}
              className={s.profile}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>

      <Link to={routes.PROFILE} className={s.popupLink}>
        EDIT PROFILE
      </Link>

      <button
        onClick={handleLogout}
        className={s.popupLink}
        type="button"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default ProfilePopup;
