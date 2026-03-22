
import { createRoot } from 'react-dom/client'
import React from 'react'
import { Provider } from 'react-redux'
import store from './core/data/redux/store'
import { BrowserRouter } from 'react-router-dom'
import { base_path } from './environment'
import AllRoutes from './router/router'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'aos/dist/aos.css';
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import '../src/assets/style/icons/feather/css/iconfont.css'
import '../src/index.scss'
import '../src/assets/style/icons/boxicons/css/boxicons.min.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <AllRoutes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
