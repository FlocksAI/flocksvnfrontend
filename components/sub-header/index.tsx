/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ISubHead } from "./interface";
import SSubHead from "./style";
import useWindowResize from "../../hook/useResize";

const SubHeadIndex: React.FC<ISubHead> = () => {
  const router = useRouter();
  const size = useWindowResize();
  return (
    <>
      <SSubHead>
        <Row>
          <Col xl={12}>
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
          {size.width > 414 && (
            <Col xl={12}>
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
          )}
        </Row>
        <Row>
          <Col xl={12}>
            <div className="banner-wrap">
              <span className="title">Our Projects</span>
              <span className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua sed.
              </span>
            </div>
          </Col>
          <Col xl={12}>
            <img
              alt="banner-sub-head"
              src="/image/home/banner-sub-head.png"
              className="pointed image-banner"
            />
          </Col>
        </Row>
      </SSubHead>
    </>
  );
};

export default SubHeadIndex;
