import LandinView from './views/HomeView.jsx';
import React, { Component } from 'react';
import { render } from 'react-dom'

class App extends Component {
    render() {
        return (
            <LandinView />
        )
    }
}

render(<App />, document.getElementById('root'));
