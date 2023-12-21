import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/2.png";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    const hardcodedEmail = "user@example.com";
    const hardcodedPassword = "password";

    if (
      formData.email === hardcodedEmail &&
      formData.password === hardcodedPassword
    ) {
      console.log("Login successful");
      navigate("/welcome");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="loginBox">
      <img
        className="user"
        src={img}
        height="100px"
        width="100px"
        alt="user-avatar"
      />
      <h3>Sign in here</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className="btn" type="submit">
          Login
        </Button>
      </Form>
      <Link to="/forgot-password">Forgot Password</Link>

      <div className="text-center">
        <Link style={{ color: "#59238F" }} to="/signup">
          Sign-Up
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
