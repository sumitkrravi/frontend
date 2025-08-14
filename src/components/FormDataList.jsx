// src/components/FormDataList.jsx

import React, { useEffect, useState } from "react";

const FormDataList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/form");
        const data = await res.json();
        if (data.success) {
          setForms(data.data);
        } else {
          console.error("Failed to fetch form data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Submitted Forms</h2>
      {forms.length === 0 ? (
        <p>No forms submitted yet.</p>
      ) : (
        forms.map((form) => (
          <div key={form._id} style={styles.card}>
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Message:</strong> {form.message}</p>
            <p><small>{new Date(form.createdAt).toLocaleString()}</small></p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
};

export default FormDataList;
