// src/pages/JobDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import jobsData from "../data/JobsData";

export default function JobDetail() {
  const { id } = useParams();

  // Find post in any section
  let post = null;
  for (const section of jobsData.sections) {
    post = section.posts.find((p) => p.id === parseInt(id));
    if (post) break;
  }

  if (!post)
    return (
      <div className="container my-5">
        <p className="text-center">Job not found!</p>
        <div className="text-center">
          <Link to="/jobs" className="btn btn-secondary mt-3">
            Back to Jobs
          </Link>
        </div>
      </div>
    );

  return (
    <div className="container my-5">
      <h1 className="mb-3">{post.title}</h1>
      <p>{post.desc}</p>

      {/* Important Dates */}
      {post.importantDates && (
        <>
          <h5 className="mt-4">Important Dates:</h5>
          <ul className="list-group mb-4">
            {post.importantDates.map((item, idx) => (
              <li key={idx} className="list-group-item">
                <strong>{item.event}:</strong> {item.date}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Buttons Section */}
      <div className="mb-4">
        {post.applyLink && (
          <a
            href={post.applyLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success me-2 mb-2"
          >
            Apply Online
          </a>
        )}
        {post.admitCardLink && (
          <a
            href={post.admitCardLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning me-2 mb-2"
          >
            Admit Card
          </a>
        )}
        {post.syllabusLink && (
          <a
            href={post.syllabusLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-info me-2 mb-2"
          >
            Syllabus
          </a>
        )}
        {post.resultLink && (
          <a
            href={post.resultLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark me-2 mb-2"
          >
            Result
          </a>
        )}
      </div>

      <Link to="/jobs" className="btn btn-secondary">
        Back to Jobs
      </Link>
    </div>
  );
}
