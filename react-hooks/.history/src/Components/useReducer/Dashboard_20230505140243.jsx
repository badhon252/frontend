import React from "react";

const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Dashboard</h1>
      {data.map((data) => {
        <ul>
          <li>Name: </li>
          <li>Email: </li>
          <li>Occupation: </li>
        </ul>;
      })}
    </div>
  );
};

export default React.memo(Dashboard);
