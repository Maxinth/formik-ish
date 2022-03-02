import { Button as AntButton, Layout } from "antd";
import styled from "styled-components";

const {
  Header: AntHeader,
  Footer: AntFooter,
  Sider: AntSider,
  Content: AntContent,
} = Layout;

const Button = styled(AntButton)`
  background-color: pink !important;
  color: green !important;
  cursor: pointer !important;
`;

const Container = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  border: 1px solid red;
  margin: 4rem auto;
  max-width: 700px;
  padding: 4rem 0.5rem;
  text-align: center;
`;

const Header = styled(AntHeader)`
background-color: red !important;
color: #fff !important;
border: 1px solid black
font-weight: bold;
`;

const Footer = styled(AntFooter)`
  background-color: black;
  color: #fff;
`;
const Sider = styled(AntSider)`
  background-color: green !important;
  color: #fff;
`;

const Content = styled(AntContent)`
  background-color: brown !important;
  color: #fff;
`;
export { Button, Container, Header, Footer, Sider, Content };
