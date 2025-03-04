import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams()
    const {user}= useAuth()
    // console.log(id, user)
    const navigate = useNavigate()

    const handleJobApply = e=>{
        e.preventDefault()
        const form = e.target;
        const Linkedin = form.Linkedin.value;
        const Github = form.Github.value;
        const Resume = form.Resume.value;
        // const ApplyData = {Linkedin, Github, Resume}
        // console.log(ApplyData)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            Linkedin,
            Github,
            Resume
        }
        axios.post('http://localhost:5000/job-applications', jobApplication)
        .then(result => {
            console.log(result.data);
            // Assuming 'acknowledged' is part of the response data
            if (result.data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Job Applied Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/myApplication')
            }
        })
        .catch(error => {
            console.error('There was an error with the application submission:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong with your application.',
            });
        });
    
        
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Apply now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleJobApply} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Linkedin URL</span>
                </label>
                <input type="url" name='Linkedin' placeholder="Linkedin URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input type="url" name='Github' placeholder="Github URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input type="url" name='Resume' placeholder="Resume URL" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default JobApply;