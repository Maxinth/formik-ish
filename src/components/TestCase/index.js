import { Container } from "./styled";
import { Typography } from "antd";

const { Title } = Typography;
const TestCase = () => {
  return (
    <Container>
      <Title>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
      <Typography.Title level={3}>h2 . Ant design</Typography.Title>
    </Container>
  );
};

export default TestCase;
