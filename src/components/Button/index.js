import { Button as AntButton } from "antd";
import styled from "styled-components";

const Button = styled(AntButton)`
  /* border: 10px solid red; */
  border-radius: 10px;
  background-color: red;
  outline: none;
  border: none;
  font-weight: bolder;
  text-transform: lowercase;
`;

export { Button };
