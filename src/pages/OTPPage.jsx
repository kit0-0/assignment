import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function OTPPage() {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const hardCodedOTP = "123456";
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

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
      setShowErrorAlert(true);
      return;
    }

    const enteredOTP = otp.join("");

    if (enteredOTP === hardCodedOTP) {
      setShowSuccessAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setShowErrorAlert(true);
    }
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
                className="form-control text-center p-0 bg-white text-dark"
              />
            </div>
          ))}
        </div>
        <Button type="submit" variant="primary" className="mb-3">
          Verify OTP
        </Button>
      </Form>
      {showSuccessAlert && (
        <Alert
          variant="success"
          onClose={() => setShowSuccessAlert(false)}
          dismissible
        >
          OTP verification successful! Redirecting to the login page.
        </Alert>
      )}
      {showErrorAlert && (
        <Alert
          variant="danger"
          onClose={() => setShowErrorAlert(false)}
          dismissible
        >
          Please enter the complete OTP.
        </Alert>
      )}
      <div className="text-center">
        <p>
          Resend OTP? <Link>Resend</Link>
        </p>
        <p>
          Back to <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default OTPPage;
