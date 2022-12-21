import { Button, Col, message, Row } from "antd";
import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import { SVerify, SVerifyDetail } from "./styled";
import useWindowResize from "../../hook/useResize";
import LoginRepositories from "../../repositories/login";

const VerifyIndex = () => {
  const size = useWindowResize();
  const router = useRouter();
  const handleActive = async () => {
    try {
      const token = router.query?.token;
      if (!token) return;
      const verify = await LoginRepositories.verifyEmailPassword({
        token: token,
      } as any);
      console.log(verify);
      if (verify.data) {
        message.success("Kích hoạt tài khoản thành công");
        setTimeout(() => {
          router.push("/sign-in");
        }, 1500);
      }
    } catch (error: any) {
      console.log(error);
      message.error(error?.response?.data?.detail);
    }
  };
  return (
    <>
      <SVerify isScroll={size.width <= 414 ? true : false}>
        <Row justify="center">
          <Col span={20}>
            <Header />
          </Col>
        </Row>
        <SVerifyDetail size={size.width <= 414 ? true : false}>
          <div className="wrap-active">
            <div className="name-web">
              <span>Flocks</span>
            </div>
            <div className="active-email">
              <span>Active Email</span>
            </div>
            <div>
              <Button type="primary" onClick={handleActive}>
                Click to active
              </Button>
            </div>
          </div>
        </SVerifyDetail>
      </SVerify>
    </>
  );
};

export default VerifyIndex;
