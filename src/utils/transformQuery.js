const queryString = require('querystring');

export const transformQuery = ({
  search,
  location,
  priceFrom,
  priceTo,
}) => {
  if (priceFrom || priceTo) {
    return `?${queryString.stringify({
      keywords: 'test',
      priceFrom: priceFrom || 0,
      priceTo: priceTo || 9999,
    })}`;
  }

  return `?${queryString.stringify({
    keywords: search,
    location,
  })}`;
};
