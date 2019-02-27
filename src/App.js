import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './views/HomeView.jsx'


class App extends Component {
    render() {
        return (
             <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={LoginForm} exact/>
            <Route path="/admin" component={ArticlesView} exact />
            <Route path="/sales" component={ArticleView} />
          </Switch>
        </div>
      </BrowserRouter>
        )
    }
}

export default App