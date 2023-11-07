// pages/api/backendapi.js

export default async (req, res) => {
  const response = await fetch('http://localhost:3001/api/backapi'); // The URL of your backend API
  const data = await response.json();
  res.json(data);
};


