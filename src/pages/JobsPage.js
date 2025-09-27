// src/pages/JobsPage.js
import React from "react";
import { Link } from "react-router-dom";
import jobsData from "../data/JobsData";

export default function JobsPage() {
  return (
    <div className="container my-5">
      {/* Top Buttons Section */}
      <div className="text-center mb-4">
        {jobsData.buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.link}
            className={`btn ${btn.className} m-1`}
            target="_blank"
            rel="noreferrer"
          >
            {btn.label}
          </a>
        ))}
      </div>

      {/* first Sections */}
      <div className="row">
        {/* Latest Jobs */}
        <div className="col-md-4 mb-3">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white text-center fw-bold">
              Latest Jobs
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="#">IBPS RRB 14th Recruitment 2025 Date Extend</a>
              </li>
              <li className="list-group-item">
                <a href="#">Railway RRC ECR Patna Apprentice Form 2025</a>
              </li>
              <li className="list-group-item">
                <a href="#">SSC Delhi Police Driver Online Form</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Admit Card */}
        <div className="col-md-4 mb-3">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white text-center fw-bold">
              Admit Card
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="#">IB Security Assistant Admit Card 2025</a>
              </li>
              <li className="list-group-item">
                <a href="#">LIC AAO / AE Admit Card 2025</a>
              </li>
              <li className="list-group-item">
                <a href="#">RPSC Assistant Engineer Admit Card 2025</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Result */}
        <div className="col-md-4 mb-3">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white text-center fw-bold">
              Result
            </div>
            <ul className="list-group list-group-flush">
              <Link className="list-group-item">
                <a href="/jobs/4">BPSSC Bihar Police Enforcement SI Pre Result 2025</a>
              </Link>
              <li className="list-group-item">
                <a href="#">Bihar Police Range Officer Pre Result 2025</a>
              </li>
              <li className="list-group-item">
                <a href="#">Bihar Police SI Mains Result 2025</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* second Sections */}
      <div className="row">
        {/*  Scholorships */}
        <div className="col-md-4 mb-3">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white text-center fw-bold">
              Scholorships            
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="#">Bihar Scholarship Online Form 2024</a>
              </li>
              <li className="list-group-item">
                <a href="#">Jharkhand Scholarship Online Form 2024</a>
              </li>
              <li className="list-group-item">
                <a href="#">UP Scholarship Online Form 2024</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Important links */}
        <div className="col-md-4 mb-3">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white text-center fw-bold">
              Important Links
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="#">MP Rojgar Panjiyan 2025</a>
              </li>
              <li className="list-group-item">
                <a href="#">NTA UGC National Eligibility Test NET / JRF Verificantion</a>
              </li>
              <li className="list-group-item">
                <a href="#">RPSC Assistant Engineer Admit Card 2025</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Admission */}
        <div className="col-md-4 mb-3">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white text-center fw-bold">
              Admission
            </div>
            <ul className="list-group list-group-flush">
              <Link className="list-group-item">
                <a href="/jobs/4">NTA Common University Admission Test CUET UG 2025</a>
              </Link>
              <li className="list-group-item">
                <a href="#">NAT Board NBE Graduate Pharmacy Aptitude Test GPAT 2025</a>
              </li>
              <li className="list-group-item">
                <a href="#">IIT GATE Admission Online Form 2026</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
