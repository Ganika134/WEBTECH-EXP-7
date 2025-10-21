import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [others, setOthers] = useState("");
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const handleCalculate = () => {
    // Validation
    if (
      income === "" ||
      rent === "" ||
      food === "" ||
      transport === "" ||
      others === ""
    ) {
      alert("All fields are required!");
      return;
    }

    const values = [income, rent, food, transport, others].map(Number);
    if (values.some((v) => v < 0)) {
      alert("Please enter positive values only!");
      return;
    }

    // Calculation
    const remaining = values[0] - (values[1] + values[2] + values[3] + values[4]);
    setBalance(remaining);

    // Display message and color
    if (remaining < 0) {
      setMessage("You are overspending!");
      setColor("red");
    } else {
      setMessage("Good job managing your expenses!");
      setColor("green");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Budget Calculator</h2>

      <div
        style={{
          display: "inline-block",
          textAlign: "left",
          background: "#f9f9f9",
          padding: "20px 40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <label>Monthly Income: </label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter monthly income"
        />
        <br /><br />

        <label>Rent / EMI: </label>
        <input
          type="number"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          placeholder="Enter rent / EMI"
        />
        <br /><br />

        <label>Food Expenses: </label>
        <input
          type="number"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter food expenses"
        />
        <br /><br />

        <label>Transport Expenses: </label>
        <input
          type="number"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          placeholder="Enter transport expenses"
        />
        <br /><br />

        <label>Other Expenses: </label>
        <input
          type="number"
          value={others}
          onChange={(e) => setOthers(e.target.value)}
          placeholder="Enter other expenses"
        />
        <br /><br />

        <button onClick={handleCalculate}>Calculate Balance</button>
      </div>

      {balance !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: color }}>
            Remaining Balance: ₹{balance}
          </h3>
          <p style={{ color: color, fontWeight: "bold" }}>{message}</p>
        </div>
      )}
    </div>
  );
}


export default App