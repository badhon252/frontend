import React from "react";

const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Dashboard</h1>
      {data.map(({ name, email, occupation }) => {
        return (
          <ul>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
            <li>Occupation: {occupation}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default React.memo(Dashboard);
