import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Navbartwo = () => {
  return (
    <div className='position-relative'>
    <Navbar className='position-static '  bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/" className="col-lg-10 col-10 "> <img className='w-25' src={`${process.env.PUBLIC_URL}/images/sn.jpg`} alt=''/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto ">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
    )
}

export default Navbartwo