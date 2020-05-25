import React from 'react';
import s from './ButtonBookmark.module.scss';
import IconBookmark from '../../Icons/IconBookmark';

const ButtonBookmark = ({ tiny, onClick, isActive, withText }) => {
  let classBtn = s.bookmarkBtn;

  if (tiny) {
    classBtn += ` ${s.tiny}`;
  }

  return (
    <button onClick={onClick} className={classBtn}>
      {isActive ? (
        <>
          <IconBookmark fill="#349A89" painted />
          {withText && <span>SAVED</span>}
        </>
      ) : (
        <>
          <IconBookmark fill="#B7B7B7" />
          {withText && <span>ADD TO FAVORITE</span>}
        </>
      )}
    </button>
  );
};

export default ButtonBookmark;
