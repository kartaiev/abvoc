import React from "react";
import { Button, Container, Divider, MainTitle, Wrap, P } from "../elements";

const Basic = ({ title }) => (
  <Container>
    <MainTitle>{title}</MainTitle>
    <Divider />
    <Wrap>
      <P>Vocabulary is empty</P>
    </Wrap>
    <Wrap>
      <Button modifiers="big">Import</Button>
    </Wrap>
  </Container>
);

export default Basic;
