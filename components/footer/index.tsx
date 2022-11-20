import { Col, Divider, Row } from "antd";
import Image from "next/image";
import React from "react";
import SFooter from "./styled";

const Footer = () => {
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
          <Col xl={10}>
            <div className="wrap">
              <div className="footer-wrap">
                <span className="footer-title">For Investor</span>
                <span className="footer-content">Why Investss</span>
                <span className="footer-content">How It Work?</span>
                <span className="footer-content">Privacy Policy</span>
              </div>
              <div className="footer-wrap">
                <span className="footer-title">For Fundraisers</span>
                <span className="footer-content">Why Raise</span>
                <span className="footer-content">How It Work?</span>
                <span className="footer-content">Privacy Policy</span>
              </div>
              <div className="footer-wrap">
                <span className="footer-title">Useful Links</span>
                <span className="footer-content">Why Invest</span>
                <span className="footer-content">How It Work?</span>
                <span className="footer-content">Privacy Policy</span>
              </div>
              <div className="footer-wrap">
                <span className="footer-title">Useful Links</span>
                <span className="footer-content">Why Invest</span>
                <span className="footer-content">How It Work?</span>
                <span className="footer-content">Privacy Policy</span>
              </div>
            </div>
          </Col>
          <Col xl={14}>
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
