import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  const history = useNavigate();

  const handleSignOut = () => {
    history("/");
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to the Dashboard</h2>
      <p>You have successfully logged in.</p>
      <Button
        type="button"
        className="btn"
        variant="primary"
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default Welcome;
