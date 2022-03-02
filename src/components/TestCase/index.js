import { Header, Footer, Content, Container } from "./styled";
import { Layout } from "antd";

// const { Footer, Sider, Content } = Layout;
const TestCase = () => {
  return (
    <Container>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Container>
  );
};

export default TestCase;
