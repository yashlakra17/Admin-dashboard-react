import React from "react";
import { Card } from "react-bootstrap";
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import "./Dashboard.css";

// Sample Data
const salesData = [
  { name: "Jan", sales: 5000, profit: 2000 },
  { name: "Feb", sales: 7000, profit: 2500 },
  { name: "Mar", sales: 9000, profit: 3500 },
  { name: "Apr", sales: 8000, profit: 3000 },
  { name: "May", sales: 12000, profit: 5000 },
];

const categoryData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home Appliances", value: 200 },
  { name: "Books", value: 100 },
];

// Colors for Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>

      {/* Statistics Cards */}
      <div className="dashboard-grid">
        <Card className="dashboard-card shadow p-4">
          <h4>Total Sales</h4>
          <p>$10,000</p>
        </Card>
        <Card className="dashboard-card shadow p-4">
          <h4>Orders</h4>
          <p>320</p>
        </Card>
        <Card className="dashboard-card shadow p-4">
          <h4>Users</h4>
          <p>150</p>
        </Card>
        <Card className="dashboard-card shadow p-4">
          <h4>Products</h4>
          <p>50</p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        {/* Bar Chart */}
        <div className="chart-box">
          <h3>Sales Performance (Bar Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="chart-box">
          <h3>Profit Trend (Line Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="profit" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-box">
          <h3>Sales by Category (Pie Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie data={categoryData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
