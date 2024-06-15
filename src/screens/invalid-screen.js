import React from "react";
import { Link, useNavigate } from "react-router-dom";

function InvalidScreen() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    const isNavigate = false;
    if (isNavigate) {
      navigate("/");
    } else {
    }
  };
  return (
    <div>
      <h3>Invalid screen, 404 error , Page not fount</h3>
      {/* <Link to={"/"}>Back to home</Link> */}
      <button onClick={handleRedirect}>Click to home screen</button>
    </div>
  );
}

export default InvalidScreen;
