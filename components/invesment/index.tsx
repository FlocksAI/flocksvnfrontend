/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import { SInvesment } from "./style";

const Invesment = () => {
  return (
    <SInvesment>
      <Row justify="center">
        <Col span={24}>
          <img
            className="image-banner"
            alt="investor"
            src="/image/home/banner-investor.png"
          />
        </Col>
      </Row>
      {/* <Row justify="center" className="wrap">
        <Col className="wrap-item" xs={24} xl={16}>
          <span className="common">{t.funding}</span>
          <br />
          <span className="common">{t.investorment}</span>
          <br />
          <span className="common one-platform">{t.same_platform}</span>
          <br />
          <span className="content">
            {t.content_investor_home_one}
          </span>
          <br />
          <span className="content">
            {t.content_investor_home_two}
          </span>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} xl={16}>
          {size.width > 414 ? (
            <img
              className="image-banner"
              alt="investor"
              src="/image/home/investor.png"
            />
          ) : (
            <img
              className="image-banner"
              alt="investor"
              src="/image/home/mobile-investor.png"
            />
          )}
        </Col>
      </Row>
      <Row className="title-tech" justify="center">
        <Col className="head" xs={24} xl={16}>
          <span className="tech">Cố Vấn Chuyên Môn</span>
          <br />
          <span>Chúng tôi cần bạn!</span>
        </Col>
        <Col className="content" xs={24} xl={16}>
          <span>
            Để giúp hàng nghìn nhà đầu tư có định hướng phù hợp trong các doanh
            nghiệp.
          </span>
          <br />
          <span>
            Flocks AI cần sự tư vấn từ các chuyên gia trong đa dạng lĩnh vực
            trên thị trường.
          </span>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} xl={8}>
          <div className="img-consul">
            <Image
              alt="people"
              src="/image/home/people.png"
              width={size.width > 414 ? 546 : 342}
              height={size.width > 414 ? 383 : 240}
            />
          </div>
        </Col>
        <Col xs={24} xl={8}>
          <div className="wrap-btn">
            <div className="btn">
              <button>Trở thành Cố Vấn Chuyên Môn</button>
            </div>
          </div>
        </Col>
      </Row> */}
    </SInvesment>
  );
};

export default Invesment;
