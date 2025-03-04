import React from "react";
import { CiAlarmOn } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";



const HotJobCard = ({ job }) => {
  // console.log(job);
  const {_id, company_logo, company, title, description, category, requirements,location,salaryRange,jobType,applicationDeadline } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl border-2 transform hover:scale-105 transition-transform">
     <div className="flex gap-3 items-center px-3 py-3">
        <figure>
            <img
            className="w-16"
            src={company_logo}
            alt="Shoes"
            />
        </figure>
        <div>
            <h1>{company}</h1>
            <span className="flex items-center gap-2"> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</span>
        </div>
     </div>
      <div className="card-body">
        <h2 className="card-title">{title}
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex justify-between">
            <p className="flex items-center gap-2"><FiShoppingBag></FiShoppingBag> {jobType}</p>
            <p className="flex items-center gap-2"><CiAlarmOn></CiAlarmOn> {applicationDeadline}</p>
        </div>
        <p>{description}</p>
        <div>
            {
               requirements.map((skills,index) => <p key={index} className="btn btn-sm  flex-wrap mr-1 mb-1 hover:bg-orange-700 hover:text-white">{skills}</p>) 
            }
        </div>
        <div className="card-actions justify-end items-center">
            <p className="text-xs">Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <Link to={`/job/${_id}`}>
             <button className="btn btn-success text-white">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
