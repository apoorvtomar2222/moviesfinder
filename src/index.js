import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/index';
import Homepage from './container/homepage/index';
import Searchpage from './container/searchpage/index';
import MovieDetails from './container/moviedetail/index';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <div>
                <Route path='*' component={Homepage} />
                <Switch>
                    <Route exact path='/' component={Searchpage} />
                    <Route exact path='/moviename/:id' component={MovieDetails} />
                </Switch>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
