import styled from "styled-components";

const Disk = styled.div`
  height: 32px;
  padding: 0.5em;
  margin: 0.5em;
  background-color: ${(props) => props.color || "palevioletred"};
  width: ${(props) => props.size * 5 + "%"};
`;

export default Disk;
