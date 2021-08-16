import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StoreProvider } from 'easy-peasy';

const _history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={ store }>
      <Router history={ _history }>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
