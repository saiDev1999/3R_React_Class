import React from "react";
import NavBar from "../components/navBar/navBar";
import AutoFocusInput from "../components/autoFocus/autoFocus";

function ContactScreen() {
  return (
    <div>
      <NavBar />
      <h2>Welcome to contact screen</h2>
      <AutoFocusInput />
    </div>
  );
}

export default ContactScreen;
