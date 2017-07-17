import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../node_modules/bulma/css/bulma.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import Profile from './components/profile'
import About from './components/about'
import { HashRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/about' component={About}/>
      </div>
    </Provider>

  </Router>

  , document.getElementById('root'));
registerServiceWorker();
