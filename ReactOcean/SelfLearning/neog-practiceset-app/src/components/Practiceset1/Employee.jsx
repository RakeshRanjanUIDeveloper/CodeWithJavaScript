import React from 'react';
import '../../../src/App.css'; // Make sure this has styles for .orangebg and .bordered

const Employee = () => {
  const employees = [
    { name: "Jack Smith", level: 2, dept: "Tech", designation: "Manager", salary: 24000 },
    { name: "Mary Robbins", level: 3, dept: "Fin", designation: "Manager", salary: 28000 },
    { name: "Steve Williams", level: 4, dept: "Ops", designation: "President", salary: 35000 },
    { name: "Bob Andrews", level: 1, dept: "Fin", designation: "Trainee", salary: 16500 },
    { name: "Dave Martin", level: 2, dept: "Fin", designation: "Manager", salary: 21700 },
    { name: "Julia Clarke", level: 3, dept: "Ops", designation: "Manager", salary: 26900 },
    { name: "Kathy Jones", level: 4, dept: "Tech", designation: "President", salary: 42500 },
    { name: "Tom Bresnan", level: 2, dept: "Tech", designation: "Manager", salary: 22200 },
  ];

  const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);

  return (
    <div>
      <h2>Employee Data</h2>
      <ul>
        {employees.map((e) => {
          const className = `${e.level === 2 ? 'orangebg' : ''} ${e.designation === 'President' ? 'bordered' : ''}`;
          return (
            <li key={e.name} className={className.trim()}>
              Name: {e.name}, Level: {e.level}, Dept: {e.dept}, Designation: {e.designation}, Salary: {e.salary}
            </li>
          );
        })}
      </ul>
      <h2>Total Salary Expense: {totalSalary}</h2>
    </div>
  );
};

export default Employee;
