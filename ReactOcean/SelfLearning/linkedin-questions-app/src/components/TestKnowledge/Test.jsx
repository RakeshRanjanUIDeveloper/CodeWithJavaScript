import React, { useState, useEffect } from "react";

export function Test() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setAllUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {allUsers.map((u) => (
          <li>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
