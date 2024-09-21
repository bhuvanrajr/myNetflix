import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Login';
import { Home } from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const route = createBrowserRouter([
  {
    path:"/",
    element : <Login/>
  },
  {
    path:"/login",
    element : <Login/>
  },
  {
    path : "/home",
    element : <Home/>
  }
])


root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
