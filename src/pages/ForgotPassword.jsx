import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    console.log("Password reset form submitted:", formData);

    navigate("/enter-otp");
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
      <h3>Forgot Password</h3>
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
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Reset Password
        </Button>
      </Form>
      <div className="text-center">
        <p>
          Remember your password? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
