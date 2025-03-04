import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const jobApplication = useLoaderData();

    const handleStatusUpdated =(e, id)=>{
        
        const data ={
           status: e.target.value 
        } 
        // console.log( data, id)
        
        axios.patch(`http://localhost:5000/job-applications/${id}`, data)
        .then((res)=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Status has been Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-bold my-10">Welcome view application: {jobApplication.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>UpdateStatus</th>
            </tr>
          </thead>
          <tbody>
            {jobApplication.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant_email}</td>
                <td>
                  <select
                    onChange={(e)=>{handleStatusUpdated(e,  application._id)}}
                  defaultValue={application.status || 'Change Status'} className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled >
                      Change Status
                    </option>
                    <option>Under Review</option>
                    <option>Set InterView</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
