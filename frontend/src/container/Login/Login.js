import React, { useState } from "react";

import { Row, Col } from "antd";
import { BasicField, BasicButton } from "../../components";
import "./style.css";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  console.log("State", state);
  return (
    <Row style={{ height: "100vh" }} justify="center" align="middle">
      <Col span={10}>
        <Row
          gutter={[10, 10]}
          className="loginFormBox"
          style={{ borderRadius: "10px", padding: "10px" }}
          justify="center"
        >
          <Col span={24}>
            <h1>Login Form</h1>
          </Col>
          <Col span={16}>
            <BasicField
              className="inputField"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </Col>
          <Col span={16}>
            <BasicField
              className="inputField"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </Col>
          <Col span={24}>
            <BasicButton
              text="Submit"
              className="btnLogin"
              onClick={() => alert()}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
