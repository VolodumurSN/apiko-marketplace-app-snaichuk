import React from 'react';
import ProfileAvatar from '../../ProfileAvatar';
import s from './MessageModal.module.scss';

const MessageModal = ({ children, data }) => {
  const { title, owner } = data;

  return (
    <div className={s.container}>
      <h3 className={s.title}>Contact seller</h3>
      <h4 className={s.subject}>{`Subject: ${title}`}</h4>

      <ProfileAvatar size="x3" user={owner} photo={owner.avatar} />

      <div className={s.ownerInfo}>
        {owner.fullName}
        <p className={s.location}>{owner.location}</p>
      </div>

      {children}
    </div>
  );
};

export default MessageModal;
