import React from 'react';
import loadable from '@loadable/component';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
const HomeScreen = loadable(() => import('./screens/HomeScreen'));
const ProductScreen = loadable(() => import('./screens/ProductScreen'));
const CartScreen = loadable(() => import('./screens/CartScreen'));
const LoginScreen = loadable(() => import('./screens/LoginScreen'));
const RegisterScreen = loadable(() => import('./screens/RegisterScreen'));
const ProfileScreen = loadable(() => import('./screens/ProfileScreen'));
const ShippingScreen = loadable(() => import('./screens/ShippingScreen'));
const PaymentScreen = loadable(() => import('./screens/PaymentScreen'));
const OrderScreen = loadable(() => import('./screens/OrderScreen'));
const UserListScreen = loadable(() => import('./screens/UserListScreen'));
const UserEditScreen = loadable(() => import('./screens/UserEditScreen'));
const ProductListScreen = loadable(() => import('./screens/ProductListScreen'));
const ProductEditScreen = loadable(() => import('./screens/ProductEditScreen'));
const ProductsSearchScreen = loadable(() =>
  import('./screens/ProductsSearchScreen')
);
const OrderListScreen = loadable(() => import('./screens/OrderListScreen'));
const YarnScreen = loadable(() => import('./screens/YarnScreen'));
const HooksScreen = loadable(() => import('./screens/HooksScreen'));
const SetsScreen = loadable(() => import('./screens/SetsScreen'));
const UserOrdersScreen = loadable(() => import('./screens/UserOrdersScreen'));
const ContactsScreen = loadable(() => import('./screens/ContactsScreen'));

/*
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductsSearchScreen from './screens/ProductsSearchScreen';
import OrderListScreen from './screens/OrderListScreen';
import YarnScreen from './screens/YarnScreen';
import HooksScreen from './screens/HooksScreen';
import SetsScreen from './screens/SetsScreen';
import UserOrdersScreen from './screens/UserOrdersScreen';
import ContactsScreen from './screens/ContactsScreen';
*/
//TODO send notifications on new order
//TODO back to home screen with pages
//TODO add popup on first vizit
// TODO -m

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/sign-in' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route
            path='/product/:id/:from/:page'
            component={ProductScreen}
            exact
          />
          <Route path='/product/:id/:from' component={ProductScreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/orders/' component={UserOrdersScreen} exact />
          <Route path='/orders/:id' component={OrderScreen} exact />
          <Route path='/contacts/' component={ContactsScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route
            path='/search/:keyword'
            component={ProductsSearchScreen}
            exact
          />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={ProductsSearchScreen}
            exact
          />
          <Route path='/yarn' component={YarnScreen} exact />
          <Route path='/yarn/:pageNumber' component={YarnScreen} exact />
          <Route path='/hooks' component={HooksScreen} exact />
          <Route path='/hooks/:pageNumber' component={HooksScreen} exact />
          <Route path='/sets' component={SetsScreen} exact />
          <Route path='/sets/:pageNumber' component={SetsScreen} exact />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
