import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingView from './views/HomeView.jsx';
import Products from './components/products.jsx';
import Dashboard from './components/dashboard.jsx';
import Create from './components/create.jsx';

class App extends Component {
    render() {
        return (
        <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={LandingView} exact/>
            <Route path="/products" component={Products} exact/>
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/create" component={Create} exact/>

          </Switch>
        </div>
      </BrowserRouter>
        )
    }
}

export default App