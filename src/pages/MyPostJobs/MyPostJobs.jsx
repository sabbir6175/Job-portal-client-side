import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";

const MyPostJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/Jobs?email=${user.email}`)
      .then((result) => {
        console.log(result.data);
        setJobs(result.data);
      });
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl mb-10"> Welcome My Posted job: {jobs.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>ApplicationCount</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* {
    "_id": "67c759aeae4bd36645d5194a",
    "title": "Mern Stack Developer",
    "location": "Dhaka",
    "jobType": "Full-time",
    "category": "Engineering",
    "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
    "company": "Programming IT",
    "requirements": [
        "React",
        "node.js",
        "express.js",
        "mongodb",
        ""
    ],
    "responsibilities": [
        "Develop and maintain software",
        "Collaborate with the team",
        ""
    ],
    "hr_name": "Rimon Islam",
    "hr_email": "sabbirhasannahid6175@gmail.com",
    "applicationDeadline": "2025-03-06",
    "company_logo": "https://i.ibb.co.com/SsRGdMT/icons8-imo-logo-96.png",
    "salaryRange": {
        "min": "30000",
        "max": "40000",
        "currency": "BDT"
    }
} */}
           {
            jobs.map((job, index)=>(
                <tr key={job._id} className="">
                <th>{index+1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                    <Link to={`/viewApplication/${job._id}`}>
                        <button className=" underline text-green-500">view application</button>
                    </Link>
                </td>
              </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostJobs;
