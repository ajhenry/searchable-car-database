import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

export const Header = () => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">Vehicle Search</NavbarBrand>
      </Container>
    </Navbar>
  );
};
