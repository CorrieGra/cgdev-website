import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Cookies from 'universal-cookie/es6';
import store from './store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StoreProvider } from 'easy-peasy';

const _history = createBrowserHistory();

const cookies = new Cookies();
cookies.set('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4ODcwNjk1LCJleHAiOjE2NjA0OTMwOTV9.JkhI-kpACqv6xZy_Te91CV1cHTvfSKI1jBpSJnmkNsU', { path: '/' })

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
