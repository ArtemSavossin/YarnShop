import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_SHOWROOM_SUCCESS,
  PRODUCT_SHOWROOM_FAIL,
  PRODUCT_SHOWROOM_REQUEST,
  PRODUCT_LIST_YARN_REQUEST,
  PRODUCT_LIST_YARN_SUCCESS,
  PRODUCT_LIST_YARN_FAIL,
  PRODUCT_LIST_HOOKS_REQUEST,
  PRODUCT_LIST_HOOKS_SUCCESS,
  PRODUCT_LIST_HOOKS_FAIL,
  PRODUCT_LIST_SETS_REQUEST,
  PRODUCT_LIST_SETS_SUCCESS,
  PRODUCT_LIST_SETS_FAIL,
  PRODUCT_LIST_MASTERS_REQUEST,
  PRODUCT_LIST_MASTERS_SUCCESS,
  PRODUCT_LIST_MASTERS_FAIL,
  PRODUCT_LIST_BOTTOMS_REQUEST,
  PRODUCT_LIST_BOTTOMS_SUCCESS,
  PRODUCT_LIST_BOTTOMS_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.playload };
    default:
      return state;
  }
};

export const productListYarnReducer = (state = { yarn: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_YARN_REQUEST:
      return { loading: true, yarn: [] };
    case PRODUCT_LIST_YARN_SUCCESS:
      return {
        loading: false,
        yarn: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_YARN_FAIL:
      return { loading: false, error: action.playload };
    default:
      return state;
  }
};

export const productListHooksReducer = (state = { hooks: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_HOOKS_REQUEST:
      return { loading: true, hooks: [] };
    case PRODUCT_LIST_HOOKS_SUCCESS:
      return {
        loading: false,
        hooks: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_HOOKS_FAIL:
      return { loading: false, error: action.playload };
    default:
      return state;
  }
};

export const productListSetsReducer = (state = { sets: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SETS_REQUEST:
      return { loading: true, sets: [] };
    case PRODUCT_LIST_SETS_SUCCESS:
      return {
        loading: false,
        sets: action.payload.products,
        pages: action.payload.products,
        page: action.payload.page,
      };
    case PRODUCT_LIST_SETS_FAIL:
      return { loading: false, error: action.playload };
    default:
      return state;
  }
};
export const productListBottomsReducer = (state = { bottoms: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_BOTTOMS_REQUEST:
      return { loading: true, bottoms: [] };
    case PRODUCT_LIST_BOTTOMS_SUCCESS:
      return {
        loading: false,
        bottoms: action.payload.products,
        pages: action.payload.products,
        page: action.payload.page,
      };
    case PRODUCT_LIST_BOTTOMS_FAIL:
      return { loading: false, error: action.playload };
    default:
      return state;
  }
};

export const productListMastersReducer = (state = { masters: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_MASTERS_REQUEST:
      return { loading: true, masters: [] };
    case PRODUCT_LIST_MASTERS_SUCCESS:
      return {
        loading: false,
        masters: action.payload.products,
        pages: action.payload.products,
        page: action.payload.page,
      };
    case PRODUCT_LIST_MASTERS_FAIL:
      return { loading: false, error: action.playload };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.playload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productShowRoomReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_SHOWROOM_REQUEST:
      return { loading: true };
    case PRODUCT_SHOWROOM_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_SHOWROOM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
