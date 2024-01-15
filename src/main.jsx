/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import { router } from "./Routes/index.jsx"
import { app } from "./firebaseConfig.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
