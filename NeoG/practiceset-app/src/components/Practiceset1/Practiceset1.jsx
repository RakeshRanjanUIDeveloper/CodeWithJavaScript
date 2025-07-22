import React from "react";
import EmployeeCard from "../Practiceset1/EmployeeCard";
import Button from "../Practiceset1/Button";
import Stationery from "../Practiceset1/Stationery";
import ImageCaption from "../Practiceset1/ImageCaption";
import Products from "../Practiceset1/Products";
import Student from "../Practiceset1/Student";
import Employee from "../Practiceset1/Employee";

const Practiceset1 = () => {
  const btnStyle = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    borderRadius: "5px",
    padding: "10px",
  };
  const items = ["pen", "pencil", "ruler", "eraser"];
  const imageLink =
    "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  const caption = "Spring Flowers";
  const student = {
    name: "John Doe",
    english: 90,
    maths: 80,
    computers: 70,
  };

  return (
    <React.Fragment>
      <EmployeeCard
        name="Rakesh"
        designation="Team Lead"
        workExperience="10 Years"
      />
      <Button btnStyle={btnStyle} />
      <Stationery stationeryItems={items} header="Stationery Items" />
      <ImageCaption imageLink={imageLink} caption={caption} />
      <Products />
      <Student studentDetails={student} />
      <Employee />
    </React.Fragment>
  );
};

export default Practiceset1;
