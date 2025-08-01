import React from "react";
import Greeting from "./Greeting";
import Product from "./Product";
import UserProfile from "./UserProfile";
import Gadgets from "./Gadgets";
import Phones from "./Phones";
import Article from "./Article";
import About from "./About";
import MyGadgets from "./MyGadgets";
import ColorPicker from "./ColorPicker";
import Todo from "./Todo";

const PracticeSet2 = () => {
  const userData = {
    name: "John",
    age: 25,
    email: "john@example.com",
  };
  const gadgetsProducts = [
    {
      id: 1,
      name: "keyboard",
      description: "Logitech Mechanical Keyboard",
      price: 2000,
    },
    { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
    {
      id: 3,
      name: "monitor",
      description: "Lenovo 32-inch display Monitor",
      price: 10000,
    },
    { id: 4, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
    {
      id: 5,
      name: "speakers",
      description: "Creative Desktop Speakers",
      price: 5000,
    },
    {
      id: 6,
      name: "headphones",
      description: "Sony over-the-ear wired Headphones with mic",
      price: 1500,
    },
    { id: 7, name: "mobile", description: "iPhone 12", price: 90000 },
  ];
  const phoneProducts = [
    {
      id: 1,
      name: "keyboard",
      description: "Logitech Mechanical Keyboard",
      price: 2000,
    },
    { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
    { id: 3, name: "mobile", description: "iPhone 13", price: 61000 },
    {
      id: 4,
      name: "monitor",
      description: "Lenovo 32-inch display Monitor",
      price: 10000,
    },
    { id: 5, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
    {
      id: 6,
      name: "speakers",
      description: "Creative Desktop Speakers",
      price: 5000,
    },
    {
      id: 7,
      name: "headphones",
      description: "Sony over-the-ear wired Headphones with mic",
      price: 1500,
    },
    { id: 8, name: "mobile", description: "iPhone 12", price: 90000 },
  ];
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";

  const heading = "About Me";
  const name = "Preeti"; // you can put your name
  const learning = "I am learning React JS currently at neoG Camp.";

  const gProducts = [
    {
      id: 1,
      name: "keyboard",
      description: "Logitech Mechanical Keyboard",
      price: 2000,
    },
    { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
    {
      id: 3,
      name: "speakers",
      description: "Bose L1 Pro32 Portable",
      price: 256000,
    },
    { id: 4, name: "mobile", description: "iPhone 13", price: 61000 },
    {
      id: 5,
      name: "monitor",
      description: "Lenovo 32-inch display Monitor",
      price: 10000,
    },
    { id: 6, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
    {
      id: 7,
      name: "speakers",
      description: "Creative Desktop Speakers",
      price: 5000,
    },
    {
      id: 8,
      name: "headphones",
      description: "Sony over-the-ear wired Headphones with mic",
      price: 1500,
    },
    { id: 9, name: "mobile", description: "iPhone 12", price: 90000 },
  ];

  const todoItems = [
    {
      id: 1,
      title: "Complete practice set",
      description: "Practice set 1 of React",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Attend revision session",
      description: "Revision session of React",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Watch recording",
      description: "Live session recording of React",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Attend DSH",
      description: "Doubt Solving Hours of React",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Complete practice set",
      description: "Practice set 2 of React",
      isCompleted: false,
    },
  ];
  return (
    <React.Fragment>
      <Greeting name="Rakesh" />
      <Product pName="Mobile" pPrice="50000" />
      <UserProfile user={userData} />
      <Gadgets gadgetsProducts={gadgetsProducts} />
      <Phones phoneProducts={phoneProducts} />
      <Article title={title} content={content} />
      <About heading={heading} name={name} learning={learning} />
      <MyGadgets gProducts={gProducts} />
      <ColorPicker />
      <Todo todoItems={todoItems} />
    </React.Fragment>
  );
};

export default PracticeSet2;
