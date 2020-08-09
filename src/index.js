import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.scss';
//React router dom
import { BrowserRouter } from 'react-router-dom';
//=> redux
import { Provider } from 'react-redux';
import ConfigStore from './Redux/Store';

const store = ConfigStore();
store.subscribe(() => {
  console.log(store.getState());
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
