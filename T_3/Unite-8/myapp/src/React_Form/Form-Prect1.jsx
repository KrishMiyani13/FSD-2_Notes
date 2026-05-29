import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: "",
    gender: "",
    city: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      First Name: ${formData.firstName}
      Email: ${formData.email}
      Password: ${formData.password}
      Confirm Password: ${formData.confirmPassword}
      Message: ${formData.message}
      Gender: ${formData.gender}
      City: ${formData.city}
    `);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Message: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          /> Female
        </div>

        <div>
          <label>City: </label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
