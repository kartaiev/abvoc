import styled from "styled-components";
import { dividerColor } from "../utils";

export const Divider = styled.div`
  width: calc(100% - 40px);
  margin: 0 20px 10px 20px;
  height: 3px;
  background: ${dividerColor};
`;
