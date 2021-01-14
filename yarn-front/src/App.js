import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/orders/:id' component={OrderScreen} />
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
