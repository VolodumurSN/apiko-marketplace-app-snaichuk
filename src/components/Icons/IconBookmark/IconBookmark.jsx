import React from 'react';
// import s from './IconBookmark.module.scss';

const IconBookmark = ({ fill, painted }) => {
  if (painted) {
    return (
      <svg
        width="20"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 17"
      >
        <path
          d="M15.4836 1.48538C13.5751 -0.386848 10.5328 -0.489899 8.5 1.18016C6.46802 -0.489112 3.42566 -0.386848 1.51637 1.48538C0.538066 2.44509 0 3.72024 0 5.078C0 6.43576 0.538066 7.7117 1.51637 8.67062L7.59307 14.6318C7.84326 14.8773 8.17203 15 8.5 15C8.82797 15 9.15674 14.8773 9.40693 14.6318L15.4836 8.67062C16.4619 7.7117 17 6.43654 17 5.078C17 3.72024 16.4619 2.4443 15.4836 1.48538Z"
          fill={fill}
        />
      </svg>
    );
  }

  return (
    <svg
      width="20"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 19"
    >
      <path
        d="M14.47,0a5.62,5.62,0,0,1,3.91,1.61A5.54,5.54,0,0,1,20,5.52,6.9,6.9,0,0,1,19.85,7a6.52,6.52,0,0,1-1,2.44c-.27.42-.51.76-.73,1a12.14,12.14,0,0,1-.93,1c-.39.39-.71.7-1,.92l-.44.4-.62.54c-.74.66-1.31,1.17-1.7,1.54s-.88.88-1.47,1.53a18.11,18.11,0,0,0-1.51,2,.58.58,0,0,1-.5.27.58.58,0,0,1-.48-.27A16.37,16.37,0,0,0,7.17,15.6c-.48-.46-.84-.81-1.1-1l-.14-.13c-.26-.23-.61-.55-1.08-.95l-1.11-1c-.24-.22-.58-.54-1-.94a9.36,9.36,0,0,1-.93-1c-.21-.27-.46-.62-.73-1A5.61,5.61,0,0,1,.49,8.31,8.59,8.59,0,0,1,0,5.52a5.54,5.54,0,0,1,1.62-3.9A5.62,5.62,0,0,1,5.53,0,5.41,5.41,0,0,1,8,.62a5.27,5.27,0,0,1,2,1.66A5.27,5.27,0,0,1,12,.62,5.41,5.41,0,0,1,14.47,0Zm2.4,10.07a7,7,0,0,0,1.85-3.47,6.59,6.59,0,0,0,.1-1.09,4.15,4.15,0,0,0-1.28-3.06,4.35,4.35,0,0,0-5.41-.59,4.37,4.37,0,0,0-1.59,1.82A.56.56,0,0,1,10,4a.53.53,0,0,1-.52-.33A4.38,4.38,0,0,0,7.86,1.87a4.2,4.2,0,0,0-2.33-.68A4.22,4.22,0,0,0,2.45,2.47a4.14,4.14,0,0,0-1.28,3A5.83,5.83,0,0,0,1.4,7.27L1.65,8a5.06,5.06,0,0,0,.66,1.17l.15.22a5.63,5.63,0,0,0,.53.66l.14.16.42.46c.15.16.37.38.66.64l.67.61.74.64,1.52,1.36c.33.29.77.74,1.35,1.34A20.66,20.66,0,0,1,10,17a18.09,18.09,0,0,1,1.46-1.76c.56-.59,1-1.07,1.41-1.42l1.52-1.37C15.6,11.37,16.42,10.58,16.87,10.08Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconBookmark;
