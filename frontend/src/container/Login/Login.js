import React from "react";
import { Row, Col } from "antd";
import { BasicField } from "../../components/InputFields/BasicField";

const Login = () => {
  return (
    <Row
      style={{ background: "red", height: "100vh" }}
      justify="center"
      align="middle"
    >
      <Col style={{ background: "blue" }}>
        <Row gutter={[10, 10]} style={{ background: "green" }} justify="center">
          <Col span={24} style={{ background: "orange" }}>
            <h1>Login Form</h1>
          </Col>
          <Col span={16}>
            <BasicField type="email" placeholder="Enter your email" />
          </Col>
          <Col span={16}>
            <BasicField type="password" placeholder="Enter your password" />
          </Col>
          <Col span={24}>
            <button>Submit</button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
