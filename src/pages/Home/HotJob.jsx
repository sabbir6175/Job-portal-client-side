import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJob = () => {
    const [jobs , setJobs]= useState([])

    useEffect(()=>{
        fetch('https://job-portal-project-server.vercel.app/Jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    },[])

    return (
        <div  className='px-10'>
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold py-20 uppercase'>All job</h1>

            <div className='grid px-3 pb-10 gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job = {job}></HotJobCard> )
                }
            </div>
        </div>
    );
};

export default HotJob;