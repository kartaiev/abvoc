import React from "react";
import { Container, P, Wrap, Input } from "../elements";

const SearchCreate = () => (
  <Container>
    <Wrap>
      <P>to search or create deck</P>
    </Wrap>
    <Wrap>
      <Input type="text" placeholder="type here..." />
    </Wrap>
  </Container>
);

export default SearchCreate;
