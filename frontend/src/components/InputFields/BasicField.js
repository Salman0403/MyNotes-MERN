import { Row, Col, Input } from "antd";

const BasicField = (props) => {
  console.log("BasicField_props: ", props);
  return (
    <Col span={24}>
      <Input {...props} />
    </Col>
  );
};
export default BasicField;
