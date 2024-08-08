import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products", {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Network error encountered...</p>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Outlet context={[data]} />
    </>
  );
}

export default App;
