import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Spam Message Classifier</h1>
      <p className="lead">Classify messages as spam or ham using AI</p>
      <div className="mt-4">
        <Link to="/login" className="btn btn-primary me-2">Login</Link>
        <Link to="/register" className="btn btn-outline-primary">Register</Link>
      </div>
    </div>
  );
}

export default LandingPage;
