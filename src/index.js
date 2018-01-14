import React from 'react';
import {render} from 'react-dom';
import {Router,Route,browserHistory, Redirect} from 'react-router';
import {Provider} from "react-redux";
import store from "./common/store/store";

import NotFound from './client/components/Presentational/notFound';
import App from './client/components/Containers/App';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

render(
    <Provider store={store}>
        <Router history={browserHistory}> 
            <Route path="/" component={App} />
            <Route path="*" component={NotFound}/>
            
        </Router>
    </Provider>,
    document.getElementById('root')
);

