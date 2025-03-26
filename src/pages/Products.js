import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const initialProducts = [
  { id: 1, name: "iPhone 14", price: "$999", category: "Mobile", stock: 20 },
  { id: 2, name: "Samsung Galaxy S23", price: "$899", category: "Mobile", stock: 15 },
  { id: 3, name: "MacBook Pro", price: "$1999", category: "Laptop", stock: 10 },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", stock: "" });

  // Open Add/Edit Modal
  const handleShow = (product = null) => {
    setEditingProduct(product);
    setNewProduct(product || { name: "", price: "", category: "", stock: "" });
    setShowModal(true);
  };

  // Close Modal
  const handleClose = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  // Handle Form Input
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Add or Update Product
  const handleSubmit = () => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? newProduct : p)));
    } else {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    }
    handleClose();
  };

  // Delete Product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2 className="mb-4">Product Management</h2>

      {/* Add Product Button */}
      <Button variant="primary" className="mb-3" onClick={() => handleShow()}>
        Add Product
      </Button>

      {/* Product Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleShow(product)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct ? "Edit Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" name="name" value={newProduct.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" value={newProduct.price} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" value={newProduct.category} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" name="stock" value={newProduct.stock} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>{editingProduct ? "Update" : "Add"} Product</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;
