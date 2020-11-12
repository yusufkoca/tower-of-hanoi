import styled from "styled-components";

const Disk = styled.div`
  height: 32px;
  background-color: ${(props) => props.color || "palevioletred"};
  width: ${(props) => 100 - props.size * 10 + "%"};
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

export default Disk;
