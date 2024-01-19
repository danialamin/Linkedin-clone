import {createBrowserRouter, createRoutesFromElements, Route, Outlet} from "react-router-dom"
import Login from "../pages/Login";
import Register from "../pages/Register"
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/home" element={<HomeLayout />} />
  </>
));