import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { StoreProvider, storeInstance } from './store';

ReactDOM.render(
  // <StoreProvider value={storeInstance}>
  <App />,
  // </StoreProvider>,
  document.getElementById('root')
);
