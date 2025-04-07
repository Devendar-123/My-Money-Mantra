import React, { useState } from "react";
import "./EmiCalculator.css";
import { PieChart, Pie, Cell } from "recharts";

const EMICalculator = () => {
  const [loanType, setLoanType] = useState("Personal Loan");
  const [loanAmount, setLoanAmount] = useState(6400000);
  const [tenure, setTenure] = useState(14);
  const [interestRate, setInterestRate] = useState(16.05);

  const interestRates = {
    "Personal Loan": 16.05,
    "Home Loan": 8.50,
    "Business Loan": 12.75,
  };

  // Update interest rate when loan type changes
  const handleLoanTypeChange = (type) => {
    setLoanType(type);
    setInterestRate(interestRates[type]);
  };

  const calculateEMI = () => {
    let monthlyRate = interestRate / 12 / 100;
    let emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
  };

  const emiAmount = calculateEMI();
  const totalPayment = emiAmount * tenure;
  const interestPayable = totalPayment - loanAmount;

  const data = [
    { name: "Principal Amount", value: loanAmount, color: "#1E3A5F" },
    { name: "Interest Payable", value: interestPayable, color: "#5AA9E6" },
  ];

  const renderCenterText = ({ cx, cy }) => {
    return (
      <g>
        <text x={cx} y={cy - 19} textAnchor="middle" fontSize={16} fontWeight="bold">
          Your EMI is
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#1E3A5F">
          ₹ {emiAmount.toLocaleString()}
        </text>
        <text x={cx} y={cy + 35} textAnchor="middle" fontSize={16} fontWeight="bold" fill="#1E3A5F">
          Per Month
        </text>
      </g>
    );
  };

  return (
    <div className="emi-calculator">
      <div className="emi-left">
        <h1 className="emi-title">EMI Calculator</h1>

        <div className="loan-buttons">
          {["Personal Loan", "Home Loan", "Business Loan"].map((type) => (
            <button
              key={type}
              className={loanType === type ? "active" : ""}
              onClick={() => handleLoanTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Loan Amount Input & Slider */}
        <label>Loan Amount (₹)</label>
        <div className="input-container">
          <span>₹</span>
          <input
            type="number"
            value={loanAmount}
            min="100000"
            max="10000000"
            step="50000"
            onChange={(e) => {
              let value = Number(e.target.value);
              if (value >= 100000 && value <= 10000000) {
                setLoanAmount(value);
              }
            }}
          />
        </div>
        <input
          type="range"
          min="100000"
          max="10000000"
          step="50000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
        <p className="value">₹ {loanAmount.toLocaleString()}</p>

        {/* Interest Rate Input & Slider */}
        <label>Interest Rate (%)</label>
        <div className="input-container">
          <input
            type="number"
            value={interestRate}
            min="1"
            max="30"
            step="0.1"
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
          <span>%</span>
        </div>
        <input
          type="range"
          min="1"
          max="30"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
        <p className="value">{interestRate.toFixed(2)}%</p>

        {/* Tenure Input & Slider */}
        <label>Tenure (Months)</label>
        <div className="input-container">
          <input
            type="number"
            value={tenure}
            min="6"
            max="60"
            step="1"
            onChange={(e) => setTenure(Number(e.target.value))}
          />
          <span>Months</span>
        </div>
        <input
          type="range"
          min="6"
          max="60"
          step="1"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
        />
        <p className="value">{tenure} Months</p>

        <button className="apply-button">Apply Now</button>
      </div>

      <div className="emi-right">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            className="pie-chart"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {renderCenterText({ cx: 150, cy: 140 })}
        </PieChart>

        <div className="emi-summary">
          <p>
            Principal Amount: <span>₹ {loanAmount.toLocaleString()}</span>
          </p>
          <p>
            Interest Payable: <span>₹ {interestPayable.toLocaleString()}</span>
          </p>
          <p className="total">
            Your Emi Amount: <span>₹ {totalPayment.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;