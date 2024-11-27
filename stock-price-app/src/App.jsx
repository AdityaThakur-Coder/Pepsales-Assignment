import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StockList from "./components/StockList";
import StockDetails from "./components/StockDetails";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Stock Viewer</h1>
        <Routes>
          <Route path="/" element={<StockList />} />
          <Route path="/details/:symbol" element={<StockDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
