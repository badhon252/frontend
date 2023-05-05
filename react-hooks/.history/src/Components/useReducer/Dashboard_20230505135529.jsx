import React from "react";

export default function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
      {props.map(state=>{

        <li>Name: </li>
        <li>Email: {email}</li>
        <li>Occupation: {occupation}</li>
    })}
      </ul>
    </div>
  );
}
