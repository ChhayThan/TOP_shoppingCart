import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Shopping Cart Project</h1>
      <Link to="home">Home</Link>
      <Link to="store">Store</Link>
      <Link to="bag">Bag</Link>
      <Link to="store/jacket">Store:Jacket</Link>
      <Outlet />
    </>
  );
}

export default App;
