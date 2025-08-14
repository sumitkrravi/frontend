import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaWpforms, FaPlus } from "react-icons/fa";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const adminServices = [
    {
      title: "Users List",
      description: "View and manage all registered users.",
      icon: <FaUser size={40} className="text-primary mb-2" />,
      link: "/admin/users",
    },
    {
      title: "Form Requests",
      description: "View and manage form submissions.",
      icon: <FaWpforms size={40} className="text-success mb-2" />,
      link: "/admin/requests",
    },
    {
      title: "Add New Service",
      description: "Add or update services for users.",
      icon: <FaPlus size={40} className="text-warning mb-2" />,
      link: "/admin/add-service",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Admin Dashboard</h2>

      <div className="row">
        {adminServices.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card h-100 shadow-sm text-center p-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(service.link)}
            >
              {service.icon}
              <h5 className="card-title mt-2">{service.title}</h5>
              <p className="card-text text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
