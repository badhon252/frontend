import React from "react";

export default function Dashboard({ name, email, occupation }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Occupation: {occupation}</li>
      </ul>
    </div>
  );
}
