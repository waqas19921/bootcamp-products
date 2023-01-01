import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useAddProductMutation } from "../../redux/services/products.service";

const AddProductForm = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();

  const handleInputChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <Row xs="1">
        <Col className="bg-light border py-5">
          <h2 className="text-center">Add Product Form</h2>
          <Form className="p-2" onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Product Name</Label>
              <Input
                type="text"
                name="name"
                value={product.name}
                placeholder="Enter Product Name"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={product.description}
                placeholder="Enter Product Description"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Image</Label>
              <Input
                type="text"
                name="image"
                value={product.image}
                placeholder="Enter Product Image"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Product Price</Label>
              <Input
                type="number"
                name="price"
                value={product.price}
                placeholder="Enter Product Price"
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button color="primary" disabled={isLoading}>
              Add Product
            </Button>
            <Button color="danger">Reset</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductForm;
