import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './components/home';
import signUp from './components/signUp';
import LogIn from './components/LogIn';
import Stripe from './components/stripe';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={signUp} />
        <Route exact path="/LogIn" component={LogIn} />
        <ProtectedRoute path="/stripe" component = {Stripe} exact={true}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;