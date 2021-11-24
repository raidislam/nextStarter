import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Link from 'next/link';
const Nav = () => {
    return (
       
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link href='/'>
            <a>Home</a>
          </Link>
        </Nav>
        </Container>
      </Navbar>

    )
}

export default Nav
