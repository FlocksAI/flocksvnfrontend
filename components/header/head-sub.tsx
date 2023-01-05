import { Breadcrumb, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useWindowResize from "../../hook/useResize";
import { ISubHead } from "./interface";
import { SDetailProjectPage } from "./styled";

const HeaderSub: React.FC<ISubHead> = (props) => {
  const { children, isShowHead = false } = props;
  const size = useWindowResize();
  const router = useRouter();
  return (
    <SDetailProjectPage>
      <Row className="head-top">
        <Col xs={12} xl={12}>
          <div className="head-left">
            <Image
              alt="logo"
              src="/image/home/avatar-sub.png"
              width={121}
              height={48}
              className="logo-image pointed"
              onClick={() => router.push("/")}
            />
          </div>
        </Col>
        {size.width > 414 && (
          <Col xs={12} xl={12}>
            <Row className="wrap-left-head">
              <Col
                xl={4}
                className="content pointed"
                onClick={() => router.push("/")}
              >
                <span>Home</span>
              </Col>
              <Col xl={4} className="content pointed">
                <span>Our Projects</span>
              </Col>
              <Col xl={4} className="content pointed">
                <span onClick={() => router.push("/blog")}>Blogs</span>
              </Col>
              <Col xl={4} className="content pointed">
                <span onClick={() => router.push("/event")}>Events</span>
              </Col>
              <Col xl={4} className="content pointed">
                <span>FAQs</span>
              </Col>
              <Col xl={4} className="btn">
                <button>Get Started</button>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
      {!isShowHead && (
        <Row justify="center" className="breadcrumb">
          <Col span={18}>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>PAGE 1</Breadcrumb.Item>
              <Breadcrumb.Item href="">PAGE 2</Breadcrumb.Item>
              <Breadcrumb.Item href="">PAGE 3</Breadcrumb.Item>
              <Breadcrumb.Item>PAGE 4</Breadcrumb.Item>
              <Breadcrumb.Item>PAGE 5</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      )}

      <Row justify="center">
        <Col span={18}>{children}</Col>
      </Row>
    </SDetailProjectPage>
  );
};

export default HeaderSub;
