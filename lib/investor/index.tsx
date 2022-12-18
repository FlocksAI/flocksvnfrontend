import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { getAuthToken } from "../../utils/helper";
import CreateInvestorIndex from "./create-investor";
import IntroductionInvestor from "./introduction";

const InvestorIndex = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const accessToken = getAuthToken();
  if (!accessToken) {
    router.push("/sign-in");
  }
  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <Header />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} xl={8}>
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
