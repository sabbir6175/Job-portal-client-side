import React from "react";
import { motion } from "framer-motion"; 
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gradient-to-br from-slate-200 to-blue-600 text-base-content p-10">
        <aside>
          <img className="w-16 h-12 rounded-md" src="download.png" alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <h1 className="text-center py-2 bg-gradient-to-br from-slate-200 to-blue-600 text-white text-base">Copyright@2025 design by <motion.span animate={{ color: ['#060afa', '#37f11a', '#ee0f08'] }} transition={{ duration: 1, repeat: Infinity }}>Sabbir hasan (nahid)</motion.span></h1>
    </div>
  );
};

export default Footer;
