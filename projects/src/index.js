import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from '../redux/store';
import './style/index.scss';
import RoutesPage from './RoutesPage';
import { store } from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesPage />
    </Provider>
  </React.StrictMode>
);
