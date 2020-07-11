import styled from "styled-components";
import { backgroundAlt, fontColor } from "../utils";

export const Container = styled.div`
  background: ${backgroundAlt};
  width: 100%;
  border: ${fontColor} 1px solid;
  border-radius: 7px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const Wrap = styled.div`
  margin: 20px 20px;
`;
