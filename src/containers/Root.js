import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import { storeShape } from '@shapes';

import Routes from '../routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: storeShape.isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
