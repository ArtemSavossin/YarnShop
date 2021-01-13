import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productListYarnReducer,
  productListSetsReducer,
  productListHooksReducer,
  productDetailReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productShowRoomReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  listUsersReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderPayReducer,
  orderDeleteReducer,
} from './reducers/orderReducers';

const reducer = combineReducers({
  productListYarn: productListYarnReducer,
  productListSets: productListSetsReducer,
  productListHooks: productListHooksReducer,
  productDetail: productDetailReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productShowRoom: productShowRoomReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  listUsers: listUsersReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderDelete: orderDeleteReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
