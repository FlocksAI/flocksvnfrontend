/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ISubHead } from "./interface";
import SSubHead from "./style";
import useWindowResize from "../../hook/useResize";
import NavigationIndex from "../navigation";
import SwitchTranslate from "../translate";

const SubHeadIndex: React.FC<ISubHead> = (props) => {
  const { content, image, title } = props;
  const router = useRouter();
  const size = useWindowResize();
  return (
    <>
      <SSubHead>
        <Row>
          <Col xs={12} xl={10}>
            <div className="head-left">
              <Image
                alt="logo"
                src="/image/home/logo-new.png"
                width={121}
                height={48}
                className="logo-image pointed"
                onClick={() => router.push("/")}
              />
              {size.width < 414 && <SwitchTranslate />}
            </div>
          </Col>
          {size.width > 414 && (
            <>
              <Col xs={12} xl={12}>
                <Row className="wrap-left-head">
                  <Col
                    xl={4}
                    className="content pointed"
                    onClick={() => router.push("/")}
                  >
                    <span onClick={() => router.push("/")}>Trang chủ</span>
                  </Col>
                  <Col xl={4} className="content pointed">
                    <span onClick={() => router.push("/project")}>Dự án</span>
                  </Col>
                  <Col xl={4} className="content pointed">
                    <span onClick={() => router.push("/blog")}>Blog</span>
                  </Col>
                  <Col xl={4} className="content pointed">
                    <span onClick={() => router.push("/event")}>Sự kiện</span>
                  </Col>
                  <Col xl={4} className="content pointed">
                    <span onClick={() => router.push("/faq")}>FAQ</span>
                  </Col>
                  <Col xl={4} className="btn">
                    <button>Get Started</button>
                  </Col>
                </Row>
              </Col>
              <Col xl={2}>
                <SwitchTranslate />
              </Col>
            </>
          )}
        </Row>
        {size.width <= 414 && (
          <div style={{ position: "relative", marginTop: "-38px" }}>
            <NavigationIndex
              content1="Trang chủ"
              content2="Dự án"
              content3="Blog"
              content4="Sự kiện"
              content5="FAQ"
            />
          </div>
        )}
        <Row justify="center">
          <Col xl={12}>
            <div className="banner-wrap">
              <span className="title">{title}</span>
              <span className="content">{content}</span>
            </div>
          </Col>
          <Col xl={4}>
            <img
              alt="banner-sub-head"
              src={image}
              className="pointed image-banner"
            />
          </Col>
        </Row>
      </SSubHead>
    </>
  );
};

export default SubHeadIndex;
