import { Col, Row } from "antd";
import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import CreateInvestorIndex from "./create-investor";
import IntroductionInvestor from "./introduction";

const InvestorIndex = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <Header />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8}>
          {isShow ? (
            <CreateInvestorIndex />
          ) : (
            <IntroductionInvestor
              setIsShow={(data: boolean) => setIsShow(data)}
            />
          )}
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default InvestorIndex;
