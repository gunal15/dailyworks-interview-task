import React, { useState } from "react";

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

  return (
    <div>
      <h2>Registration Form with conditions</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
