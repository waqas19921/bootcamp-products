import React from "react";
import { useDispatch } from "react-redux";
import {
  Col,
  Container,
  Row,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Button,
  Spinner,
} from "reactstrap";
import {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
} from "../../redux/services/products.service";
import { addProduct } from "../../redux/slices/productSlice";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const onAddToCart = (product) => {
    dispatch(addProduct(product));
  };

  // console.log("Hook response:", isLoading, products, isError);

  return (
    <>
      <Container className="mt-4">
        <Col className="bg-light border py-3">
          <h2 className="text-center">Products</h2>
          {isLoading ? (
            <Spinner color="primary" type="grow">
              Loading...
            </Spinner>
          ) : (
            <Row xs="1" sm="2" lg="3" className="my-2">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <Col key={`product-list-item-${product.id}`} className="my-2">
                    <Card>
                      <img alt="Sample" src={product.image} />
                      <CardBody>
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        <CardText>{product.description}</CardText>
                        <CardText>Rs: {product.price}</CardText>
                        <Button onClick={() => onAddToCart(product)}>
                          Add to Cart
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                ))
              ) : (
                <div>
                  <p>No Product to Display</p>
                </div>
              )}
            </Row>
          )}
        </Col>
      </Container>
    </>
  );
};

export default Products;
