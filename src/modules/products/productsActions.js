import { createAsyncActions } from '@letapp/redux-actions';

export const fetchLatestAction = createAsyncActions(
  'products/FETCH_LATEST',
);

export const fetchMoreLatestAction = createAsyncActions(
  'products/FETCH_MORE_LATEST',
);

export const saveProductAction = createAsyncActions(
  'products/SAVE_PRODUCT',
);
export const unSaveProductAction = createAsyncActions(
  'products/UNSAVE_PRODUCT',
);
export const fetchSavedAction = createAsyncActions(
  'products/FETCH_SAVED',
);

export const addProductAction = createAsyncActions(
  'products/ADD_PRODUCT',
);

export const fetchSellerAction = createAsyncActions(
  'products/FETCH_SELLER',
);

export const fetchSellerProductsAction = createAsyncActions(
  'products/FETCH_SELLER_PRODUCTS',
);

export const fetchProductAction = createAsyncActions(
  'products/FETCH_PRODUCT',
);
