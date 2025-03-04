import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJob = () => {
    const [jobs , setJobs]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/Jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    },[])

    return (
        <div >
            <h1 className='text-center text-5xl py-32'>All job show this browser</h1>

            <div className='grid px-3 pb-10 gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job = {job}></HotJobCard> )
                }
            </div>
        </div>
    );
};

export default HotJob;