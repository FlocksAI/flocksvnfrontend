import React from "react";
import Header from "../../components/header";
import { SCompanyIndex } from "./styled";
import useWindowResize from "../../hook/useResize";
import { Col, Row } from "antd";
import Footer from "../../components/footer";
import CreateCompanyIndex from "./create-company";

const CompanyIndex = () => {
  const size = useWindowResize();
  return (
    <>
      <SCompanyIndex isScroll={size.width <= 414 ? true : false}>
        <Row justify="center">
          <Col span={20}>
            <Header />
          </Col>
        </Row>
      </SCompanyIndex>
      <Row justify="center">
        <Col xs={22} xl={8}>
          <CreateCompanyIndex />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default CompanyIndex;
