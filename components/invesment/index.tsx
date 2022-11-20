/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { SInvesment } from "./style";

const Invesment = () => {
  return (
    <SInvesment>
      <Row justify="center" className="wrap">
        <Col className="wrap-item" span={16}>
          <span className="common">Gọi Vốn &</span>
          <br />
          <span className="common">Đầu Tư</span>
          <br />
          <span className="common one-platform">Trên 01 Nền Tảng</span>
          <br />
          <span className="content">
            Flocks AI là nền tảng dành cho người Việt, hỗ trợ thẩm định doanh
          </span>
          <br />
          <span className="content">
            nghiệp và kết nối với nguồn vốn cộng đồng Việt Nam.
          </span>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={16}>
          <img
            className="image-banner"
            alt="investor"
            src="/image/home/investor.png"
          />
        </Col>
      </Row>
      <Row className="title-tech" justify="center">
        <Col className="head" span={16}>
          <span className="tech">Cố Vấn Chuyên Môn</span>
          <br />
          <span>Chúng tôi cần bạn!</span>
        </Col>
        <Col className="content" span={16}>
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
        <Col span={8}>
          <div className="img-consul">
            <Image
              alt="people"
              src="/image/home/people.png"
              width={546}
              height={383}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="wrap-btn">
            <div className="btn">
              <button>Trở thành Cố Vấn Chuyên Môn</button>
            </div>
          </div>
        </Col>
      </Row>
    </SInvesment>
  );
};

export default Invesment;
