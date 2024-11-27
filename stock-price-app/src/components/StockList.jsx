import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios
      .get("/mock-stocks.json") // Mock data
      .then((response) => setStocks(response.data))
      .catch((error) => console.error("Error fetching stocks:", error));
  }, []);

  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            <Link to={`/details/${stock.symbol}`}>
              {stock.name}: ₹{stock.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
