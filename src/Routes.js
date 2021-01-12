import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './container/Pages/Home/Home';
import SignIn from './container/SignIn/SignIn';
import SignUp from './container/SignUp/SignUp';
import AuthContextProvider from './context/AuthContext';
import AdminPanel from './container/AdminPanel/AdminPanel'
import AdminContextProvider from './context/AdminContext'
import AdminPanelEdit from './container/AdminPanel/AdminPanelEdit';
import Cart from './container/Cart/Cart';
import BurgerMenu from './container/Pages/Header/BurgerMenu';
import CreditCard from './components/CreditCard/CreditCard';

const Routes = () => {
    return (
        <AdminContextProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                
            </Switch>
            <Switch>
                <AuthContextProvider>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                </AuthContextProvider>
            </Switch>
            <Switch>
                
                    <Route exact path="/admin" component={AdminPanel}/>
                    <Route exact path="/edit" component={AdminPanelEdit}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/burger" component={BurgerMenu}/>
                    <Route exact path="/credit-card" component={CreditCard}/>
            </Switch>
        </BrowserRouter>
        </AdminContextProvider>
    );
};

export default Routes;