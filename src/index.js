import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToastContainer
      limit={3}
      position="top-right"
      autoClose={2000}
      theme="dark"
      pauseOnHover={true}
      closeButton={<></>} />
    <App />
  </Provider>
);

