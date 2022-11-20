import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/header";
import SigninIndex from "../../components/sign-in";
import useWindowResize from "../../hook/useResize";
import SSignInPage from "./styled";

const SignInPage = () => {
  const size = useWindowResize();
  return (
    <>
      <SSignInPage isScroll={size.width <= 414 ? true : false}>
        <Row justify="center">
          <Col span={20}>
            <Header />
          </Col>
        </Row>
        <SigninIndex size={size.width} />
      </SSignInPage>
    </>
  );
};

export default SignInPage;
