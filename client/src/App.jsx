import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

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
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;