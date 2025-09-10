import React, { useEffect, useState } from "react";
import { fakeUserFetch } from "./api/fakeUserFetch";

const User = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [showAddress, setShowAddress] = useState(true);
  useEffect(() => {
    fakeUserFetch("https://example.com/api/user")
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleAddress = () => {
    setShowAddress((prev) => !prev);
  };
  return (
    <React.Fragment>
      <h2>User Details</h2>
      {!userDetails ? (
        <h3>Loading User Details....</h3>
      ) : (
        <React.Fragment>
          <h3>Name : {userDetails.name}</h3>
          <h3>Email : {userDetails.email}</h3>
          <h3>Phone : {userDetails.phone}</h3>
          <button onClick={handleAddress}>
            {showAddress ? "Hide Address" : "Show Address"}
          </button>
          {showAddress && userDetails.address ? (
            <p>
              {userDetails.address.street}, {userDetails.address.suite},{" "}
              {userDetails.address.city}, {userDetails.address.zipcode}
            </p>
          ) : (
            ""
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default User;
