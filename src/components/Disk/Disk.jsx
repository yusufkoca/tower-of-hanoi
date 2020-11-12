import styled from "styled-components";

const Disk = styled.div`
  height: 32px;
  background-color: ${(props) => props.color || "palevioletred"};
  width: ${(props) => 100 - props.size * 5 + "%"};
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
`;

export default Disk;
