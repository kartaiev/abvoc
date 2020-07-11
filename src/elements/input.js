import styled from "styled-components";
import { backgroundAlt, dividerColor, fontColor, fontColorAlt } from "../utils";

export const Input = styled.input`
  width: calc(100% - 40px);
  margin-bottom: 40px;
  background: ${backgroundAlt};
  padding: 10px;
  border: none;
  border-bottom: ${fontColor} 1px solid;
  font-size: 1rem;

  &:focus {
    outline: ${dividerColor} 1px solid;
  }
  &::placeholder {
    color: ${fontColorAlt};
  }
`;
