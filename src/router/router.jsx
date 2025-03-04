import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/Details/jobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";






  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>Router not found</h1>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/job/:id',
            element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
            loader: ({params})=> fetch(`http://localhost:5000/Jobs/${params.id}`)
        },
        {
          path:"/JobApply/:id",
          element:<PrivateRouter><JobApply></JobApply></PrivateRouter>
        },
        {
          path:"/myApplication",
          element:<PrivateRouter><MyApplication></MyApplication></PrivateRouter>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);




  export default router