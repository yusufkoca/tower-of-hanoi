import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 2%;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: antiquewhite;
  }
  @media (max-width: 768px) {
    padding: 2px;
    font-size: 14px;
  }
`;

export default Button;
