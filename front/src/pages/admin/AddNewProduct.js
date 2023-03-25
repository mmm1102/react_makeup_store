import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Modal from "react-bootstrap/Modal";

function AddNewProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-success" className="mb-3" onClick={handleShow}>
        Add new product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Product name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="text" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Brand"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="text" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Category"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="text" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Price"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="text" />
            </FloatingLabel>
           

           <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Add product image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewProduct;
