import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/header";
import { SSignUp } from "./styled";
import useWindowResize from "../../hook/useResize";
import SignUpDetail from "./detail";

const SignUpIndex = () => {
  const size = useWindowResize();
  return (
    <>
      <SSignUp isScroll={size.width <= 414 ? true : false}>
        <Row justify="center">
          <Col span={20}>
            <Header />
          </Col>
        </Row>
        <SignUpDetail size={size.width} />
      </SSignUp>
    </>
  );
};

export default SignUpIndex;
