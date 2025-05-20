import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Classify({ token, logout }) {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const classify = async () => {
    setError(null);
    try {
      console.log("Text being sent:", text);
      console.log("Token being sent:", token);
      const res = await axios.post(
        'http://localhost:5000/api/messages/predict',
        { text },
        { headers: { Authorization: 'Bearer ' + token } }
      );
      setPrediction(res.data.prediction);
    } catch (err) {
      setError(err.response?.data?.error || 'Server error');
    }
  };

  // Logout handler with redirect
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Spam Message Classifier</h2>
        <button className="btn btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <textarea
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a message..."
      />
      <button className="btn btn-primary mt-2" onClick={classify}>
        Classify
      </button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {prediction && (
        <div className="alert alert-info mt-3">
          This message is predicted as: <strong>{prediction}</strong>
        </div>
      )}
    </div>
  );
}

export default Classify;
