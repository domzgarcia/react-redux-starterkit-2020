import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from './store';
import App from 'Layouts/app.main';
import './scss/index.scss';

const Boot = () => {
  return(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default Boot;