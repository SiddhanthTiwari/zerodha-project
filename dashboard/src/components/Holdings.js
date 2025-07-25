import React, { useState, useEffect } from "react";
import axios from "axios"; // removed unnecessary 'all' import
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        setLoading(true);
        // FIX: Added withCredentials: true to send authentication cookie
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/allHoldings`,
          { withCredentials: true } // <-- THIS WAS MISSING!
        );
        
        console.log("Holdings response:", response.data); // Debug log
        setAllHoldings(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching holdings:", err);
        setError("Failed to fetch holdings. Please make sure you're logged in.");
        setAllHoldings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  // Show loading state
  if (loading) {
    return <div>Loading holdings...</div>;
  }

  // Show error state
  if (error) {
    return <div className="error">{error}</div>;
  }

  // The rest of your component remains the same...
  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
