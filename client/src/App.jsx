import { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');

  const classify = async () => {
  console.log("Classify button clicked!");
  console.log("Text to classify:", text);
  try {
    const res = await axios.post('http://localhost:5000/api/messages/predict', { text });
    console.log("Response from server:", res.data);
    setPrediction(res.data.prediction);
  } catch (err) {
    console.error("Error:", err);
    alert("Server error: " + (err.response?.data?.error || err.message));
  }
};

  return (
    <div className="container mt-5">
      <h2>Spam Message Classifier</h2>
      <textarea
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a message..."
      />
      <button className="btn btn-primary mt-2" onClick={classify}>
        Classify
      </button>
      {prediction && (
        <div className="alert alert-info mt-3">
          This message is predicted as: <strong>{prediction}</strong>
        </div>
      )}
    </div>
  );
}

export default App;