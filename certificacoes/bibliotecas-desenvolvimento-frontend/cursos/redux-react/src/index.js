import React from 'react';
import ReactDOM from 'react-dom/client';

import { addMessage, store } from './redux';
import DisplayMessages from './DisplayMessages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DisplayMessages />
    </Provider>
  </React.StrictMode>
);