import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const _history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={ _history }>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
