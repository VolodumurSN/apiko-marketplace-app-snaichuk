import { Api } from '../../services/Api';
import { transformQuery } from '../../utils/transformQuery';
import {
  fetchLatestAction,
  fetchMoreLatestAction,
  saveProductAction,
  unSaveProductAction,
  fetchSavedAction,
  fetchSellerProductsAction,
  fetchSellerAction,
  addProductAction,
  fetchProductAction,
} from './productsActions';

export function fetchLatest(queries) {
  return async function fetchLatestThunk(dispatch) {
    try {
      dispatch(fetchLatestAction.start());

      let res;

      if (
        queries?.search ||
        queries?.location ||
        queries?.priceFrom ||
        queries?.priceTo
      ) {
        res = await Api.getSearchProducts(transformQuery(queries));
      } else {
        res = await Api.getLatestProducts();
      }

      dispatch(fetchLatestAction.success(res.data));
    } catch (err) {
      dispatch(
        fetchLatestAction.error({
          message: err.message,
        }),
      );
      throw err;
    }
  };
}

export function fetchMoreLatest({ from, limit }) {
  return async function fetchMoreLatestThunk(dispatch) {
    try {
      dispatch(fetchMoreLatestAction.start());

      const res = await Api.getMoreLatestProducts(from, limit);

      dispatch(fetchMoreLatestAction.success(res.data));
    } catch (err) {
      dispatch(
        fetchMoreLatestAction.error({
          message: err.message,
        }),
      );
      throw err;
    }
  };
}

export function saveProduct(id) {
  return async function saveProductThunk(dispatch) {
    try {
      dispatch(saveProductAction.start());

      await Api.saveProduct(id);

      dispatch(saveProductAction.success());
    } catch (err) {
      dispatch(
        saveProductAction.error({
          message: err.message,
        }),
      );
    }
  };
}

export function unSaveProduct(id) {
  return async function unSaveProductThunk(dispatch) {
    try {
      dispatch(unSaveProductAction.start());

      await Api.unSaveProduct(id);

      dispatch(unSaveProductAction.success());
    } catch (err) {
      dispatch(
        unSaveProductAction.error({
          message: err.message,
        }),
      );
    }
  };
}

export function fetchSaved() {
  return async function fetchSavedThunk(dispatch) {
    try {
      dispatch(fetchSavedAction.start());

      const res = await Api.getSavedProducts();

      dispatch(fetchSavedAction.success(res.data));
    } catch (err) {
      dispatch(
        fetchSavedAction.error({
          message: err.message,
        }),
      );
    }
  };
}

export function fetchSeller(id) {
  return async function fetchSellerThunk(dispatch) {
    try {
      dispatch(fetchSellerAction.start());

      const res = await Api.getUserById(id);

      dispatch(fetchSellerAction.success(res.data));
    } catch (err) {
      dispatch(
        fetchSellerAction.error({
          message: err.message,
        }),
      );
    }
  };
}

export function fetchSellerProducts(id) {
  return async function fetchSellerProductsThunk(dispatch) {
    try {
      dispatch(fetchSellerProductsAction.start());

      const res = await Api.getUserProducts(id);

      dispatch(fetchSellerProductsAction.success(res.data));
    } catch (err) {
      dispatch(
        fetchSellerProductsAction.error({
          message: err.message,
        }),
      );
    }
  };
}

export function addProduct(body) {
  return async function addProductThunk(dispatch) {
    try {
      dispatch(addProductAction.start());

      const res = await Api.addProduct(body);

      dispatch(addProductAction.success(res.data));
    } catch (err) {
      dispatch(
        addProductAction.error({
          message: err.message,
        }),
      );

      throw err;
    }
  };
}

export function fetchProduct(id) {
  return async function fetchProductThunk(dispatch) {
    try {
      dispatch(fetchProductAction.start());

      const res = await Api.getProductById(id);

      dispatch(fetchProductAction.success(res.data));
    } catch (err) {
      dispatch(
        fetchProductAction.error({
          message: err.message,
        }),
      );
    }
  };
}
