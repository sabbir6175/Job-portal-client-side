import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/job-application?email=${user.email}`)
      .then((result) => {
        console.log(result.data);
        setJobs(result.data);
      });
  }, [user.email]);

  const handleDeleteJobApplication = (id) => {
    console.log(id);  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, then send the delete request
        axios.delete(`http://localhost:5000/job-application/${id}`)
          .then(response => {
            if (response.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
             setJobs((prevJobs)=>prevJobs.filter((job)=>job._id !==id))
            } else {
              Swal.fire({
                title: "Error!",
                text: "There was an issue deleting the job application.",
                icon: "error"
              });
            }
          })
          .catch(error => {
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the job application.",
              icon: "error"
            });
          });
      }
    });
  };
  
  
  return (
    <div>
      <h1>Welcome My application: {jobs.length}</h1>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
     
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            jobs.map(job=>  <tr key={job._id}>
              
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                </td>
               
                <th>
                  <button onClick={()=>handleDeleteJobApplication(job._id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>)
        }
      
    
   
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyApplication;
