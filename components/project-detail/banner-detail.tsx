/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import Slider from "react-slick";
import { SETTING } from "./constant";

const BannerProjectDetail = () => {
  return (
    <>
      <Row justify="center">
        <Col span={12}>
          <Slider {...SETTING}>
            <div>
              <img src="/image/home/banner-sub-0.png" alt="image-project" />
            </div>
            <div>
              <img src="/image/home/banner-sub-1.png" alt="image-project" />
            </div>
            <div>
              <img src="/image/home/banner-sub-2.png" alt="image-project" />
            </div>
            <div>
              <img src="/image/home/banner-sub-3.png" alt="image-project" />
            </div>
          </Slider>
        </Col>
        <Col span={6}>diqdwjiqw</Col>
      </Row>
    </>
  );
};

export default BannerProjectDetail;
