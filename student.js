import React from "react";

const Student = ({ studentd }) => {
  if (studentd.yearsofjoining === 2019 && studentd.yearsofpassout) {
    return <h1>{studentd.name} passed within the time period</h1>;
  } else {
    return <h1>{studentd.name} did not pass within the time period</h1>;
  }
};

export default Student;
