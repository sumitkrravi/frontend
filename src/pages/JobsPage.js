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

      {/* Sections */}
      {jobsData.sections.map((section, idx) => (
        <div key={idx} className="mb-5">
          <h3 className="mb-3">{section.category}</h3>

          <ul className="list-group">
            {section.posts.map((post) => (
              <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <h6 className="mb-1">{post.title}</h6>
                  <p className="mb-1 text-muted">{post.desc}</p>
                  <small>Date: {post.date}</small>
                </div>
                <div className="mt-2 mt-md-0">
                  <Link to={`/jobs/${post.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
