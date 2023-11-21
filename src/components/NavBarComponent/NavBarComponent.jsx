import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBarComponent.css'
import DropdownCurrency from '../DropdownCurrencyComponent/DropdownCurrencyComponent';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

  

const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar expand="lg" className="navbar ps-3" variant='dark'>
    <Container fluid>
    <Navbar.Brand> <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Luxury Tech</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <div className='d-flex gap-5'>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link> <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Home</Link></Nav.Link>
          <Nav.Link><Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Products</Link></Nav.Link>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link
                      to={`/category/${category}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          <Nav.Link href="#action3" >
            Nosotros
          </Nav.Link>
          <Nav.Link href="#action4" >
            Contacto
          </Nav.Link>
        </Nav>
        <Form className="d-flex ps-4">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        </div>
      </Navbar.Collapse>
      <div className='d-flex container-extranav'>
        <CartWidgetComponent />
        <DropdownCurrency />
        </div>
    </Container>
  </Navbar>
  );
}

export default NavBarComponent;