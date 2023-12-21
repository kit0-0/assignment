import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function OTPPage() {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^\d+$/.test(value) || value === "") {
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        newOTP[index] = value;
        return newOTP;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (otp.some((digit) => digit === "")) {
      alert("Please enter the complete OTP.");
      return;
    }

    const enteredOTP = otp.join("");
    console.log("Entered OTP:", enteredOTP);

    navigate("/");
  };

  return (
    <div className="loginBox">
      <h3 className="mb-3">Enter OTP</h3>
      <Form onSubmit={handleSubmit}>
        <div className="row g-2 mb-3">
          {otp.map((digit, index) => (
            <div className="col" key={index}>
              <input
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="form-control text-center p-0 "
              />
            </div>
          ))}
        </div>
        <Button type="submit" variant="primary" className="mb-3">
          Verify OTP
        </Button>
      </Form>
      <div className="text-center">
        <p>
          Resend OTP? <Link to="/">Resend</Link>
        </p>
        <p>
          Back to <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default OTPPage;
