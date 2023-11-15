// index.js
import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store';
import App from './App';

const rootElement = document.getElementById('root');

const render = (Component) => {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <Component />
      </Provider>
    </React.StrictMode>
  );
};

// Initial render
render(App);

// Hot module replacement
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
