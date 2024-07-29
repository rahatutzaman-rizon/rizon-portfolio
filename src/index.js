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
import Projects from './pages/Projects';
import Gallery from './pages/Gallary';
import Layout from './components/Layout';
import AllProjects from './pages/AllProjects';
import ContactForm from './pages/Email';
import SingleBlog from './pages/SingleBlog';
import SingleProject from './pages/SingleProject';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[

      {
        path:"/",
        element:<App></App>
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
    path: "/blog/:id",
    element:<SingleBlog></SingleBlog>,
  },

  {
    path: "/contact",
    element:<ContactForm></ContactForm>,
  },
  {
    path: "/project",
    element:<AllProjects></AllProjects>,
  },
  {
    path: "/project/:id",
    element:<SingleProject></SingleProject>,
  },
  {
    path: "/about",
    element:<AboutSection></AboutSection>,
  },

  {
    path: "/gallery",
    element:<Gallery></Gallery>,
  },

  
    ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
