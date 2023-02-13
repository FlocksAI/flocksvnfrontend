import { Col, Divider, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import SFooter from "./styled";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <SFooter>
        <Row>
          <Col xl={12}>
            <Image
              alt="footer"
              src="/image/home/footer-logo.png"
              width={211}
              height={93}
            />
          </Col>
          <Col xl={12} className="wrap-input">
            <div className="footer-input">
              <input placeholder="Enter email" />
              <button>Subcribe</button>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={24} xl={10}>
            <Row className="wrap">
              <Col xs={12} xl={6} className="footer-wrap pointed">
                <span
                  className="footer-title"
                  onClick={() => router.push("/investor")}
                >
                  For Investor
                </span>
              </Col>
              <Col xs={12} xl={6} className="footer-wrap footer-mobile pointed">
                <span
                  className="footer-title"
                  onClick={() => router.push("/company")}
                >
                  For Fundraisers
                </span>
              </Col>
              <Col xs={12} xl={6} className="footer-wrap pointed">
                <span
                  className="footer-title"
                  onClick={() => router.push("/faq")}
                >
                  How It Works
                </span>
              </Col>
              <Col xs={12} xl={6} className="footer-wrap footer-mobile pointed">
                <span className="footer-title">Privacy Policy</span>
              </Col>
            </Row>
          </Col>
          <Col xl={14} className="col-mobile">
            <div className="wrap-icon">
              <Image
                alt="footer-icon"
                src="/image/home/Facebook-Negative.png"
                width={20}
                height={20}
              />
              <Image
                alt="footer-icon"
                src="/image/home/Twitter-Negative.png"
                width={20}
                height={20}
              />
              <Image
                alt="footer-icon"
                src="/image/home/Instagram-Negative.png"
                width={20}
                height={20}
              />
              <Image
                alt="footer-icon"
                src="/image/home/LinkedIn-Negative.png"
                width={20}
                height={20}
              />
              <Image
                alt="footer-icon"
                src="/image/home/Google-Negative.png"
                width={20}
                height={20}
              />
            </div>
          </Col>
        </Row>
      </SFooter>
    </>
  );
};

export default Footer;
