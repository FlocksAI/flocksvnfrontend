import { Col, Row, Spin } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ModalSuccessInvestor from "../../components/modal-success/modal-success-investor";
import { getAuthToken } from "../../utils/helper";
import CreateInvestorIndex from "./create-investor";
import IntroductionInvestor from "./introduction";
import ProfileRepositories from "../../repositories/profile";

const InvestorIndex = () => {
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataMe, setDataMe] = useState() as any;
  const router = useRouter();
  const accessToken = getAuthToken();
  const getProfile = async () => {
    try {
      setIsLoading(true);
      const resp = await ProfileRepositories.getProfileMe();
      if (!resp.data) {
        setDataMe();
      }
      setDataMe(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!accessToken) {
      router.push("/sign-in");
      return;
    }
    getProfile();
  }, []);
  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <Header />
        </Col>
      </Row>
      {/* {isLoading && (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        />
      )} */}
      {dataMe?.hasInvestmentProfile ? (
        <Row justify="center">
          <Col xs={22} xl={8}>
            <ModalSuccessInvestor />
          </Col>
        </Row>
      ) : (
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
      )}
      <Footer />
    </>
  );
};

export default InvestorIndex;
