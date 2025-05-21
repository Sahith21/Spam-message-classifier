import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return navigate('/login');
    axios
      .get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(() => navigate('/login'));
  }, []);

  const handleClassify = async () => {
    if (!text.trim()) return;

    try {
      const res = await axios.post(
        'http://localhost:5000/api/messages/predict',
        { text },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResult(res.data.prediction);
    } catch (err) {
      console.error('Error classifying message', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      {user ? (
        <>
          <div className="d-flex justify-content-between">
            <h3>Welcome, {user.username}!</h3>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>

          <div className="mt-4">
            <h5>Spam Message Classifier</h5>
            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Enter message here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="btn btn-primary" onClick={handleClassify}>
              Classify
            </button>

            {result && (
              <div className="alert alert-info mt-3">
                This message is predicted as: <strong>{result.toUpperCase()}</strong>
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
