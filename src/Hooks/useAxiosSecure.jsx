import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: "https://job-portal-project-server.vercel.app",
    withCredentials: true,
})



const useAxiosSecure = () => {
    const {singOutUser} = useAuth();
    const navigate = useNavigate()
    axiosInstance.interceptors.response.use((response)=>{
        return response;
    },(error)=>{
        console.log("error caught in interceptors", error)
        if(error.status ===401 || error.status ===403){
            singOutUser()
            .then(()=>{
                console.log("log out user")
                navigate('/login')
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;