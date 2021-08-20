import './index.css';
// import 'animate.css/animate.min.css';
import 'react-notifications-component/dist/theme.css'
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactNotification from 'react-notifications-component'
import store from './store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StoreProvider } from 'easy-peasy';

const _history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={ store }>
      <Router history={ _history }>
        <ReactNotification />
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
