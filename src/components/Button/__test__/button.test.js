import { Button } from "../index";
import renderer from "react-test-renderer";

it("renders a snapshot of <Button />", () => {
  const btn = renderer.create(<Button />).toJSON();
  expect(btn).toMatchSnapshot();
});
