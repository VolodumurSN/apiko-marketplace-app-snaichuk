import { handleActions } from '@letapp/redux-actions';
import {
  fetchLatestAction,
  fetchMoreLatestAction,
  saveProductAction,
  unSaveProductAction,
  fetchSavedAction,
  fetchSellerAction,
  fetchSellerProductsAction,
  addProductAction,
  fetchProductAction,
} from './productsActions';

const INITIAL_STATE = {
  latestItems: [],

  noMore: false,

  latest: {
    isLoading: false,
    isError: false,
  },
  moreLatest: {
    isLoading: false,
    isError: false,
  },
  saveItem: {
    isLoading: false,
    isError: false,
  },
  unSaveItem: {
    isLoading: false,
    isError: false,
  },
  saved: {
    items: [],
    isLoading: false,
    isError: false,
  },
  userProducts: {
    items: [],
    isLoading: false,
    isError: false,
  },
  addProduct: {
    isLoading: false,
    isError: false,
  },
  fetchSeller: {
    seller: {},
    isLoading: false,
    isError: false,
  },

  fetchProduct: {
    product: {},
    isLoading: false,
    isError: false,
  },
};

export default handleActions(
  {
    [fetchLatestAction.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchLatestAction.success]: (state, { payload }) => {
      const noMore =
        payload.length < 20 || payload[payload.length - 1].id === 1;

      return {
        ...state,
        latestItems: payload,
        noMore: noMore,
        latest: {
          ...state.latest,
          isLoading: false,
          isError: false,
        },
      };
    },

    [fetchLatestAction.error]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        isError: true,
      },
    }),

    [fetchMoreLatestAction.start]: (state) => ({
      ...state,
      moreLatest: {
        ...state.moreLatest,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchMoreLatestAction.success]: (state, { payload }) => {
      const noMore =
        payload.length < 20 || payload[payload.length - 1].id === 1;

      return {
        ...state,
        latestItems: state.latestItems.concat(payload),
        noMore: noMore,
        moreLatest: {
          ...state.moreLatest,
          isLoading: false,
          isError: false,
        },
      }
    },

    [fetchMoreLatestAction.error]: (state) => ({
      ...state,
      moreLatest: {
        ...state.moreLatest,
        isLoading: false,
        isError: true,
      },
    }),

    [saveProductAction.start]: (state) => ({
      ...state,
      saveItem: {
        ...state.saveItem,
        isLoading: true,
        isError: false,
      },
    }),

    [saveProductAction.success]: (state) => ({
      ...state,
      saveItem: {
        ...state.saveItem,
        isLoading: false,
        isError: false,
      },
    }),

    [saveProductAction.error]: (state) => ({
      ...state,
      saveItem: {
        ...state.saveItem,
        isLoading: false,
        isError: true,
      },
    }),

    [unSaveProductAction.start]: (state) => ({
      ...state,
      unSaveItem: {
        ...state.unSaveItem,
        isLoading: true,
        isError: false,
      },
    }),

    [unSaveProductAction.success]: (state) => ({
      ...state,
      unSaveItem: {
        ...state.unSaveItem,
        isLoading: false,
        isError: false,
      },
    }),

    [unSaveProductAction.error]: (state) => ({
      ...state,
      unSaveItem: {
        ...state.unSaveItem,
        isLoading: false,
        isError: true,
      },
    }),

    [fetchSavedAction.start]: (state) => ({
      ...state,
      saved: {
        ...state.saved,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchSavedAction.success]: (state, { payload }) => ({
      ...state,
      saved: {
        ...state.saved,
        items: payload,
        isLoading: false,
        isError: false,
      },
    }),

    [fetchSavedAction.error]: (state) => ({
      ...state,
      saved: {
        ...state.saved,
        isLoading: false,
        isError: true,
      },
    }),

    [fetchSellerAction.start]: (state) => ({
      ...state,
      fetchSeller: {
        ...state.fetchSeller,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchSellerAction.success]: (state, { payload }) => ({
      ...state,
      fetchSeller: {
        ...state.fetchSeller,
        isLoading: false,
        isError: false,
        seller: payload,
      },
    }),

    [fetchSellerAction.error]: (state) => ({
      ...state,
      fetchSeller: {
        ...state.fetchSeller,
        isLoading: false,
        isError: true,
      },
    }),

    [fetchSellerAction.start]: (state) => ({
      ...state,
      userProducts: {
        ...state.userProducts,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchSellerProductsAction.success]: (state, { payload }) => ({
      ...state,
      userProducts: {
        ...state.userProducts,
        items: payload.list,
        isLoading: false,
        isError: false,
      },
    }),

    [fetchSellerProductsAction.error]: (state) => ({
      ...state,
      userProducts: {
        ...state.userProducts,
        isLoading: false,
        isError: true,
      },
    }),

    [addProductAction.start]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: true,
        isError: false,
      },
    }),

    [addProductAction.success]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
        isError: false,
      },
    }),

    [addProductAction.error]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
        isError: true,
      },
    }),

    [fetchProductAction.start]: (state) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: true,
        isError: false,
      },
    }),

    [fetchProductAction.success]: (state, { payload }) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: false,
        isError: false,
        product: payload,
      },
    }),

    [fetchProductAction.error]: (state) => ({
      ...state,
      fetchProduct: {
        ...state.fetchProduct,
        isLoading: false,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
