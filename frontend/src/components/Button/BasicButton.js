import { Col, Button } from "antd";

const BasicButton = (props) => {
  console.log("BasicButton_props: ", props);
  return (
    <Col span={24}>
      <Button {...props} >{props.text}</Button>
    </Col>
  );
};
export default BasicButton;
