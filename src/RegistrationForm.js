import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = "";

    if (!/^[A-Za-z]+$/.test(name)) {
      error = "Name should be in string only";
    } else if (!/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/.test(email)) {
      error = "Invalid email";
    } else if (password.length < 8) {
      error = "Password should be at least 8 characters";
    }

    alert(error);
  };

  const inputStyle = {
    width: "200px",
  };

  return (
    <div className="container">
      <h2>Registration Form with conditions</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
