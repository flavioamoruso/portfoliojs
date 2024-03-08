import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function Products(props) {
  return (
    <Row xs={6} md={12} className="g-1">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.body}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Products;
