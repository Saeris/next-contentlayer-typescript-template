import React from "react";
import { Container, Links, Navigation, NavLink } from "./elements";

export const Header: React.VFC = () => (
  <Container>
    <Navigation>
      <Links>
        <NavLink to="/">Home</NavLink>
      </Links>
    </Navigation>
  </Container>
);
