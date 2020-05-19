export const checkPhoto = (photos) => {
  let photo =
    'https://dummyimage.com/201x145/dddee6/636369.jpg&text=No+Image+Available';

  if (
    photos &&
    photos[0] &&
    photos[0].match(/\.(jpeg|jpg|gif|png)$/)
  ) {
    photo = photos[0];
  }

  return photo;
};
