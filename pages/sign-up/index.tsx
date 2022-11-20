import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/header";
import SignUpIndex from "../../components/sign-up";
import SSignUp from "./styled";
import useWindowResize from "../../hook/useResize";

const SignUpPage = () => {
  const size = useWindowResize();
  return (
    <>
      <SSignUp isScroll={size.width <= 414 ? true : false}>
        <Row justify="center">
          <Col span={20}>
            <Header />
          </Col>
        </Row>
        <SignUpIndex size={size.width} />
      </SSignUp>
    </>
  );
};

export default SignUpPage;
