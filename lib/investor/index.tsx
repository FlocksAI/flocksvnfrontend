import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/header";
import IntroductionInvestor from "./introduction";

const InvestorIndex = () => {
  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <Header />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <IntroductionInvestor />
        </Col>
      </Row>
    </>
  );
};

export default InvestorIndex;
