import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Blog from './blog/Blog.jsx'; // Hubi inaad saxday halkan
import AboutUs from './Home/AboutUs.jsx';
import Shop from './shop/Shop.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'blog', element: <Blog /> } // Saxaad halkan
      ,
      { path: 'about', element: <AboutUs /> },

      { path: 'about', element: <Shop/> }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);