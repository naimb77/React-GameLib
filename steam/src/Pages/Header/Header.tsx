import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModeButton from '../../Components/ModeButton';
import '../../App.css'



export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container style={{ justifyContent: 'center' }}>
          <Link to="/"><img src="/assets/game-logo.svg" alt="" style={{ width: 150, height: 150, marginLeft: 10 }} /></Link>
          <Nav className="justify-content-center" style={{ display: 'flex', flexDirection: 'row' }}>
            <Link style={{ textDecoration: 'none', fontWeight: 500, color: 'lightgray', width: 100, padding: 8 }} to="/">Home</Link>
            <Link style={{ textDecoration: 'none', fontWeight: 500, color: 'lightgray', width: 100, padding: 8 }} to="/games">Games</Link>
            <Link style={{ textDecoration: 'none', fontWeight: 500, color: 'lightgray', width: 100, padding: 8, marginRight: 20 }} to="/games/search/">Search</Link>
            <div className="dropdown" style={{ marginRight: 20 }}>
              <button className="dropbtn">Extra's</button>
              <div className="dropdownContent">
                <Link to="/game-list/">Game List</Link>
                <Link to="/game-form/">Add Game</Link>
              </div>
            </div>
          </Nav>
          <ModeButton />
          <Link to="/"><img src="/assets/game-logo.svg" alt="" style={{ width: 150, height: 150, marginLeft: 10 }} /></Link>
        </Container>
      </Navbar>
    </div>
  );
}


