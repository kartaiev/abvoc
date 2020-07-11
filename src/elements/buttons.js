import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { backgroundAlt, fontColor, pink, pinkAlt, easeOut } from "../utils";

const BUTTONS_MODIFIERS = {
  big: () => css`
    width: 100%;
  `,
};

export const Button = styled.button`
  background: ${pink};
  height: 50px;
  width: 150px;
  border: ${pink} 1px solid;
  border-radius: 7px;
  box-shadow: none;
  color: ${backgroundAlt};
  font-family: "Josefine", sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  ${easeOut}

  &:hover {
    background: ${pinkAlt};
    color: ${fontColor};
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);
  }

  &:active {
    box-shadow: none;
    background: ${pink};
  }

  ${applyStyleModifiers(BUTTONS_MODIFIERS)}
`;
