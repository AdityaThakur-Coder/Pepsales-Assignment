import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StockDetails = () => {
  const { symbol } = useParams();
  const [stock, setStock] = useState(null);

  useEffect(() => {
    axios
      .get(`/mock-stocks.json`) // Mock data
      .then((response) => {
        const stockDetails = response.data.find((s) => s.symbol === symbol);
        setStock(stockDetails);
      })
      .catch((error) => console.error("Error fetching stock details:", error));
  }, [symbol]);

  return (
    <div>
      {stock ? (
        <>
          <h2>{stock.name} Details</h2>
          <p>Symbol: {stock.symbol}</p>
          <p>Price: ₹{stock.price}</p>
          <p>Details: {stock.details}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockDetails;
