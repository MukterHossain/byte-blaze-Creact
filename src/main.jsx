import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { router } from './routes/Routes'
import  { Toaster } from 'react-hot-toast';
// import Home from './pages/Home';
// import Blogs from './pages/Blogs';
// import Bookmarks from './pages/Bookmarks';
// import MainLayouts from './Layouts/MainLayouts';
// import Home from './pages/Home';
// import Blog from './pages/Blog';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  {/* <App></App> */}
  </React.StrictMode>,
)
