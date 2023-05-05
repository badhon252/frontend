import React from "react";

const Dashboard = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>Name: </li>
        <li>Email: </li>
        <li>Occupation: </li>
      </ul>
    </div>
  );
};

export default React.memo(Dashboard);
