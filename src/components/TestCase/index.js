import { Button } from "antd";
import { Button as StyledButton, Container } from "./styled";
const TestCase = () => {
  return (
    <Container>
      <Button type="primary" disabled>
        btn
      </Button>
      <StyledButton danger disabled>
        btn
      </StyledButton>
    </Container>
  );
};

export default TestCase;
