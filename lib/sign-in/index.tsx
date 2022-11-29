import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/header";
import useWindowResize from "../../hook/useResize";
import SigninDetail from "./detail";
import { SSignInIndex } from "./styled";

const SignInIndex = () => {
  const size = useWindowResize();
  return (
    <>
      <SSignInIndex isScroll={size.width <= 414 ? true : false}>
        <Row justify="center">
          <Col span={20}>
            <Header />
          </Col>
        </Row>
        <SigninDetail size={size.width} />
      </SSignInIndex>
    </>
  );
};

export default SignInIndex;
