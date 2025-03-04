import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "motion/react";

const JobDetails = () => {
  const jobData = useLoaderData();
  console.log(jobData);
  return (
    <div className=" bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-10">
      <h1 className="text-center pb-10 text-white  text-4xl">
        Job details page
      </h1>

      <div className="max-w-sm mx-auto p-6 bg-gradient-to-r from-yellow-500 via-purple-600 to-cyan-400 shadow-xl rounded-xl">
        <div className="flex justify-center mb-4">
          <img
            src={jobData.company_logo}
            alt="Company Logo"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">
          {jobData.title}
        </h2>
        <p className="text-white">{jobData.company}</p>

        <div className="text-sm text-white mt-2">
          <p>
            <strong>Location:</strong> {jobData.location}
          </p>
          <p>
            <strong>Job Type:</strong> {jobData.jobType}
          </p>
          <p>
            <strong>Category:</strong> {jobData.category}
          </p>
          <p>
            <strong>Deadline:</strong> {jobData.applicationDeadline}
          </p>
          <p>
            <strong>Salary:</strong> {jobData.salaryRange.min} -{" "}
            {jobData.salaryRange.max} {jobData.salaryRange.currency}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-white">Job Description:</h3>
          <p className="text-white">{jobData.description}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-white">Responsibilities:</h3>
          <ul className="list-disc pl-5 text-white">
            {jobData.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-white">Requirements:</h3>
          <ul className="list-disc pl-5 text-white">
            {jobData.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* The part below controls the layout for larger and smaller screens */}
        <p className="text-sm text-white">
          Contact: {jobData.hr_name} ({jobData.hr_email})
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <Link to={`/JobApply/${jobData._id}`}>
            <button
          
              className=" text-white px-4 py-2 border-2 rounded-lg shadow-md hover:bg-green-500 hover:border-2 hover:border-red-500 transition-all duration-300"
            >
              Apply Now
            </button>
          </Link>
        </div>

        {/* Responsive horizontal line for larger screens */}
        <div className="mt-6  border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default JobDetails;
