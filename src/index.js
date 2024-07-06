import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from './pages/Dashboard';
import BlogCard from './pages/BlogCard';
import AboutSection from './pages/Achievements';
import Contact from './pages/Contact';

import Projects from './pages/Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/dashboard",
    element:<Dashboard></Dashboard>,
  },
  {
    path: "/blog",
    element:<BlogCard></BlogCard>,
  },

  {
    path: "/contact",
    element:<Contact></Contact>,
  },
  {
    path: "/project",
    element:<Projects></Projects>,
  },
  {
    path: "/about",
    element:<AboutSection></AboutSection>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
