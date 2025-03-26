import React, { useState } from "react";
import { Table, Button, Dropdown } from "react-bootstrap";

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", joined: "2024-01-15" },
  { id: 2, name: "Alice Smith", email: "alice@example.com", role: "Customer", joined: "2024-02-10" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", joined: "2024-03-05" },
  { id: 3, name: "yash lakra", email: "lakrayash@gmail.com", role: "Retainer", joined: "2024-01-22" },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);

  // Update User Role
  const updateRole = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2 className="mb-4">User Management</h2>

      {/* Users Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant={user.role === "Admin" ? "danger" : "primary"} size="sm">
                    {user.role}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => updateRole(user.id, "Admin")}>Admin</Dropdown.Item>
                    <Dropdown.Item onClick={() => updateRole(user.id, "Customer")}>Customer</Dropdown.Item>
                    <Dropdown.Item onClick={() => updateRole(user.id, "Retainer")}>Retainer</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>{user.joined}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
