import React, { useState } from "react";
import { Table, Button, Dropdown } from "react-bootstrap";

const initialOrders = [
  { id: 101, customer: "John Doe", total: "$250", status: "Pending", date: "2025-03-20" },
  { id: 102, customer: "Alice Smith", total: "$120", status: "Shipped", date: "2025-03-21" },
  { id: 103, customer: "Bob Johnson", total: "$340", status: "Delivered", date: "2025-03-22" },
  { id: 104, customer: "yash", total: "$340", status: "Delivered", date: "2025-03-22" },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);

  // Update Order Status
  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  // Delete Order
  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div>
      <h2 className="mb-4">Order Management</h2>

      {/* Orders Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant={
                    order.status === "Pending" ? "warning" : order.status === "Shipped" ? "primary" : "success"
                  } size="sm">
                    {order.status}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => updateStatus(order.id, "Pending")}>Pending</Dropdown.Item>
                    <Dropdown.Item onClick={() => updateStatus(order.id, "Shipped")}>Shipped</Dropdown.Item>
                    <Dropdown.Item onClick={() => updateStatus(order.id, "Delivered")}>Delivered</Dropdown.Item>
                    <Dropdown.Item onClick={() => updateStatus(order.id, "Delivered")}>Delivered</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>{order.date}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteOrder(order.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
