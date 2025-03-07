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
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostJobs from "../pages/MyPostJobs/MyPostJobs";
import ViewApplication from "../pages/viewApplication/viewApplication";
import Jobs from "../pages/Jobs/Jobs";






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
          path: 'jobs',
          element: <Jobs></Jobs>
        },
        {
            path: '/job/:id',
            element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
            loader: ({params})=> fetch(`https://job-portal-project-server.vercel.app/Jobs/${params.id}`)
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
          path:"AddJobs",
          element: <PrivateRouter><AddJobs></AddJobs></PrivateRouter>
        },
        {
          path:"myPostJobs",
          element: <PrivateRouter><MyPostJobs></MyPostJobs></PrivateRouter>
        },
        {
          path:"viewApplication/:job_id",
          element: <PrivateRouter><ViewApplication></ViewApplication> </PrivateRouter>,
          loader: ({params})=> fetch(`https://job-portal-project-server.vercel.app/job-application/jobs/${params.job_id }`)
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