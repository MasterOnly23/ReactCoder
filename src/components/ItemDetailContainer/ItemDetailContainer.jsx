import { Card } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      <Card
      // eslint-disable-next-line react/prop-types
        key={product.id}
        style={{ width: "18rem", margin: 20, height: "500px" }}
      >
        {/* eslint-disable-next-line react/prop-types*/}
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          {/* eslint-disable-next-line react/prop-types*/}
          <Card.Title>{product.title}</Card.Title>
          {/* eslint-disable-next-line react/prop-types*/}
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
