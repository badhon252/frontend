import React from "react";

export default function Dashboard(props) {
  console.log(props);
  return (
    <div>
      <h1>Dashboard</h1>
      {props.map((state) => {
        <ul>
          <li>Name: </li>
          <li>Email: {email}</li>
          <li>Occupation: {occupation}</li>
        </ul>;
      })}
    </div>
  );
}
