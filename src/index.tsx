import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './pages/Menu/Menu';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import { HomeIconButton } from './components/HomeIconButton';
import { Provider } from 'react-redux';
import store from './store/store';
import Tables from './pages/Tables/Tables';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router /> */}
      {/* <Menu /> */}
      <Tables/>
      <HomeIconButton/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
