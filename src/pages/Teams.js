import React from "react";
import "./Teams.css";

const contributors = [
  {
    name: "Sumit Sharma",
    role: "Frontend Developer",
    photo: "https://res.cloudinary.com/dncdnjsw9/image/upload/v1757507804/Picsart_25-08-17_15-57-27-783_n5d5uw.png",
    description: "Sumit designed and developed the user interface of the website, making it responsive and user-friendly using React and Bootstrap.",
  },
  {
    name: "Anjali Verma",
    role: "Backend Developer",
    photo: "/team/anjali.jpg",
    description: "Anjali built the backend using Node.js and MongoDB, ensuring smooth data flow between frontend and server.",
  },
  {
    name: "Rohit Singh",
    role: "UI/UX Designer",
    photo: "/team/rohit.jpg",
    description: "Rohit created the visual design, color palette, and structured layout for better user experience.",
  },
  {
    name: "Priya Gupta",
    role: "Project Manager",
    photo: "/team/priya.jpg",
    description: "Priya coordinated the project workflow, managed tasks, and ensured timely delivery of the website.",
  },
];

export default function Teams() {
  return (
    <div className="teams-container">
      <h1>Meet Our Contributors</h1>
      <div className="team-grid">
        {contributors.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
