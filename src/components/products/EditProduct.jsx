import React from "react";

import { Col, Container, Row } from "reactstrap";
import { useGetSingleProductQuery } from "../../redux/services/products.service";

const EditProduct = () => {
  const res = useGetSingleProductQuery({id: 1, name: 'apple-watch'});
  console.log(res)
  return (
    <Container className="mt-4">
      <Row xs="1">
        <Col className="bg-light border py-5">
          <h2 className="text-center">Edit Product</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
