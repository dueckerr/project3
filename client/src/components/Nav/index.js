import React, { Component } from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';

function TopNav() {
  return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Frac Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/maintenance_logs">Maintenance Logs</Nav.Link>
      <Nav.Link href="/inventory">Inventory</Nav.Link>
      <Nav.Link href="/pump_maint">Pump Maintenance</Nav.Link>
      <Nav.Link href="/units_on-site">Units On Location</Nav.Link>
      <Nav.Link href="/addMaint">Add Maintenance</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default TopNav;
