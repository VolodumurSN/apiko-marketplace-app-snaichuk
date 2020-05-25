const queryString = require('querystring');

export const transformQuery = ({
  search,
  location,
  priceFrom,
  priceTo,
}) => {
  if (priceFrom || priceTo) {
    return `?${queryString.stringify({
      keywords: search,
      priceFrom: priceFrom || 0,
      priceTo: priceTo || 999999,
    })}`;
  }

  return `?${queryString.stringify({
    keywords: search,
    location,
  })}`;
};
