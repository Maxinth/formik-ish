import { Button as AntButton } from "antd";
import styled from "styled-components";

const Button = styled(AntButton)`
  /* background-color: pink !important; */
  cursor: pointer;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  margin: 4rem auto;
  max-width: 700px;
  padding: 4rem 0.5rem;
`;

export { Button, Container };
