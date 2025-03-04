import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const MyApplication = () => {
    const {user} = useAuth();
    const [job, setJob] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/job-application?email=${user.email}`)
        .then(result=>{
            console.log(result.data)
            setJob(result.data)
        })
    },[])
    return (
        <div>
            <h1>Welcome My application: {job.length}</h1>
        </div>
    );
};

export default MyApplication;