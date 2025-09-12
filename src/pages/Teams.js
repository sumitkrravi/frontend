import React from "react";
import "./Teams.css";

const contributors = [
  {
    name: "Gajendra Kr Ravidas",
    role: "Founder & Full Stack Developer",
    photo: "https://res.cloudinary.com/dncdnjsw9/image/upload/v1757507804/Picsart_25-08-17_15-57-27-783_n5d5uw.png",
    description: "I started e-Cyber Cafe to make online work simple and fast. Our aim is to help everyone get digital services without any stress.",
  },
  {
    name: "Sumit Kr Ravi",
    role: "Co-Founder & Frontend Developer",
    photo: "https://res.cloudinary.com/dncdnjsw9/image/upload/v1757510999/Picsart_25-09-10_18-55-53-749_hunawx.png",
    description: "At e-Cyber Cafe, I believe in teamwork and trust. We are working to give people smooth and quick online support.",
  },
  {
    name: "Sweta Kumari",
    role: "Advertising Manager",
    photo: "https://res.cloudinary.com/dncdnjsw9/image/upload/v1757511548/Picsart_25-09-10_19-08-39-945_oqowp9.png ",
    description: "We are here to guide you step by step. Our focus is on clear, friendly, and fast service.",
  },
  {
    name: "Pawan Kr Ravidas",
    role: "Project Manager",
    photo: "https://res.cloudinary.com/dncdnjsw9/image/upload/v1757512141/49_igd85w.png",
    description: "Our team works every day to make sure you get the right help at the right time.",
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
