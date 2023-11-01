import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarComponent.css'
import DropdownCurrency from '../DropdownCurrencyComponent/DropdownCurrencyComponent';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar ps-3" variant='dark'>
    <Container fluid>
      <Navbar.Brand href="#">Luxury Tech</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <div className='d-flex gap-5'>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Products</Nav.Link>
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