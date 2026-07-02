import React from "react";

const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Dashboard</h1>
      {data.map(({ name, email, occupation, id }) => {
        return (
          <ul>
            <li key={id}>Name: {name}</li>
            <li key={id}>Email: {email}</li>
            <li key={id}>Occupation: {occupation}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default React.memo(Dashboard);
