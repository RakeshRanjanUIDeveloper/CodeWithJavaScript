import React from "react";

const Student = () => {
  const studentData = [
    {
      id: 1,
      name: "Nitin",
      marks: 78,
    },
    {
      id: 2,
      name: "Mehak",
      marks: 95,
    },
    {
      id: 3,
      name: "Mehul",
      marks: 65,
    },
    {
      id: 4,
      name: "Nina",
      marks: 56,
    },
  ];

  const totalMarks = studentData.reduce((acc, curr) => acc+curr.marks, 0);
  const meanMarks = totalMarks/studentData.length;
  console.log(meanMarks)
  let text = '';
  switch(true){
    case meanMarks >80:
        text = 'Certfication Approved'
        break;
    case meanMarks <= 80:
        text = 'Certification Not Approved'
        break;
    default :
        text = 'Student did not appeared in the Exam'
  }
  return <div>{text}</div>;
};

export default Student;
