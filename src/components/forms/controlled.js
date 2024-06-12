import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

function ControlledComponents() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [formErrors, setFormErrors] = useState({
    usernameError: null,
    passwordError: null,
    genderError: null,
  });

  const userNameHandler = (event) => {
    const userEnteredUsername = event.target.value;
    setUsername(userEnteredUsername);

    // Validation for username
    const usernameRegex = /^[a-z]/;
    const testCasePassed = usernameRegex.test(userEnteredUsername);

    if (testCasePassed) {
      setFormErrors({ ...formErrors, usernameError: null });
    } else {
      setFormErrors({
        ...formErrors,
        usernameError:
          "Username must be at least 3 characters long and contain only letters and numbers",
      });
    }
  };

  const passwordHandler = (event) => {
    const userEnteredPassword = event.target.value;
    setPassword(userEnteredPassword);

    const testCasePassed = userEnteredPassword.length <= 10;
    if (testCasePassed) {
      setFormErrors({ ...formErrors, passwordError: null });
    } else {
      setFormErrors({
        ...formErrors,
        passwordError: "Password must be 10 characters or less",
      });
    }
  };

  const genderHandler = (event) => {
    const userEnteredGender = event.target.value;
    setGender(userEnteredGender);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clientPostServer();
  };

  const clientPostServer = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          setLoginSuccess(false);
        } else {
          setLoginSuccess(true);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className={`form-control ${
            formErrors.usernameError ? "is-invalid" : ""
          }`}
          id="username"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={userNameHandler}
        />
        {formErrors.usernameError && (
          <div className="invalid-feedback">{formErrors.usernameError}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="pwd" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className={`form-control ${
            formErrors.passwordError ? "is-invalid" : ""
          }`}
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          value={password}
          onChange={passwordHandler}
        />
        {formErrors.passwordError && (
          <div className="invalid-feedback">{formErrors.passwordError}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="form-label">
          Gender:
        </label>
        <select
          value={gender}
          onChange={genderHandler}
          className="form-control"
          id="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      {!formErrors.usernameError && !formErrors.passwordError && (
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      )}
      {loginSuccess && <h2 className="success-message">Welcome user</h2>}
    </form>
  );
}

export default ControlledComponents;
