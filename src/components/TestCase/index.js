import { Header, Footer, Content, Container, Sider, Layout } from "./styled";
import { Layout as AntLayout, Divider } from "antd";

// const { Footer, Sider, Content } = Layout;

const TestCase = () => {
  return (
    <>
      <Container>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Container>

      <Divider>DASH</Divider>

      <Container>
        <Layout>
          <Header>Header</Header>
          <AntLayout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </AntLayout>
          <Footer>Footer</Footer>
        </Layout>
      </Container>
    </>
  );
};

export default TestCase;
