/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ISubHead } from "./interface";
import SSubHead from "./style";
import useWindowResize from "../../hook/useResize";
import NavigationIndex from "../navigation";

const SubHeadIndex: React.FC<ISubHead> = (props) => {
  const { content, image, title } = props;
  const router = useRouter();
  const size = useWindowResize();
  return (
    <>
      <SSubHead>
        <Row>
          <Col xs={12} xl={12}>
            <div className="head-left">
              <Image
                alt="logo"
                src="/image/home/avatar-sub.png"
                width={121}
                height={48}
                className="logo-image pointed"
              />
            </div>
          </Col>
          {size.width > 414 ? (
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
                <Col xl={4} className="content">
                  <span>Blogs</span>
                </Col>
                <Col xl={4} className="content">
                  <span>Events</span>
                </Col>
                <Col xl={4} className="content">
                  <span>FAQs</span>
                </Col>
                <Col xl={4} className="btn">
                  <button>Get Started</button>
                </Col>
              </Row>
            </Col>
          ) : (
            <Col xs={12}>
              <NavigationIndex
                content1="Home"
                content2="Our Projects"
                content3="Blogs"
                content4="Events"
                content5="FAQs"
              />
            </Col>
          )}
        </Row>
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
