import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routes/BaseRoutes';
import ProfileAvatar from '../ProfileAvatar';
import ProfilePopup from '../ProfilePopup';
import IconBookmark from '../Icons/IconBookmark';
import s from './Header.module.scss';
import IconLogo from '../Icons/IconLogo';

const Header = ({ user, children, ...userProps }) => {
  const { pathname } = useLocation();

  let classHeader = s.header;
  let fill = '#000';
  let isBookmarksScene = pathname === routes.BOOKMARKS;

  if (!pathname.includes('/auth')) {
    classHeader += ` ${s.dark}`;
    fill = '#FFF';
  }

  return (
    <header className={classHeader}>
      <div className={s.container}>
        <Link to={routes.HOME}>
          <IconLogo pathname={pathname} />
        </Link>

        <div className={s.center}>{children}</div>

        <div className={s.right}>
          {user ? (
            <UserView {...{ user, ...userProps }} />
          ) : (
            <Link
              to={routes.LOGIN}
              style={{ color: fill }}
              className={s.authLink}
            >
              LOGIN
            </Link>
          )}

          <Link to={routes.BOOKMARKS} className={s.bookmarkLink}>
            {isBookmarksScene ? (
              <IconBookmark fill={fill} painted />
            ) : (
              <IconBookmark fill={fill} />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

const UserView = ({ user, handleLogout, handlePopup, isPopup }) => {
  return (
    <Fragment>
      <div onClick={handlePopup}>
        <ProfileAvatar user={user} photo={user.avatar} />

        {isPopup && (
          <ProfilePopup user={user} handleLogout={handleLogout} />
        )}
      </div>
    </Fragment>
  );
};

export default Header;
