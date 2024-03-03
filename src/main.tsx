import React from 'react';
import ReactDOM from 'react-dom/client';
import { Inspector } from 'react-dev-inspector';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/index';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Inspector />
      <App />
    </Provider>
  </React.StrictMode>,
);
