import React from "react";

const Student = ({ studentDetails }) => {
  const totalMarks =
    studentDetails.english + studentDetails.maths + studentDetails.computers;

  let grade = "D"; // default
  if (totalMarks >= 225) {
    grade = "A";
  } else if (totalMarks >= 180) {
    grade = "B";
  } else if (totalMarks >= 150) {
    grade = "C";
  }

  return (
    <div>
      <h2>Student Details</h2>
      <h3>Name : {studentDetails.name}</h3>
      <p>English - {studentDetails.english}</p>
      <p>Maths - {studentDetails.maths}</p>
      <p>Computers - {studentDetails.computers}</p>
      <p>Grade - {grade}</p>
    </div>
  );
};

export default Student;
