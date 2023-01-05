/* eslint-disable @next/next/no-img-element */
import { Col, Divider, Progress, Row } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import Moment from "react-moment";
import Slider from "react-slick";
import { SBannerProject } from "../../lib/peoject-detail/styled";
import { SETTING } from "./constant";
import { IProjectDetailBanner } from "./interface";

const BannerProjectDetail: React.FC<IProjectDetailBanner> = ({
  collectedBudget,
  numberInvestors,
  closingDate,
}) => {
  const router = useRouter();
  return (
    <SBannerProject>
      <Row justify="center">
        <Col xl={10}>
          <Slider {...SETTING}>
            <div>
              <img
                className="img-slider"
                src="/image/home/banner-sub-0.png"
                alt="image-project"
              />
            </div>
            <div>
              <img
                className="img-slider"
                src="/image/home/banner-sub-1.png"
                alt="image-project"
              />
            </div>
            <div>
              <img
                className="img-slider"
                src="/image/home/banner-sub-2.png"
                alt="image-project"
              />
            </div>
          </Slider>
        </Col>
        <Col xs={0} xl={1} />
        <Col xs={22} xl={4}>
          <div className="mobile-active">
            <div className="wrap-info-day">
              <span className="started-day">Started: 09/Oct/2022</span>
              <Divider />
              <span className="total-value">{collectedBudget}đ</span>
              <span>Rasied</span>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={99.9}
              />
              <div className="timeline">
                <div className="info-timeline">
                  <span className="value-investor common-investor">
                    {numberInvestors}
                  </span>
                  <span className="content-value-investor common-investor">
                    Nhà đầu tư
                  </span>
                </div>
                <div className="info-timeline">
                  <Moment
                    format="DD"
                    className="value-investor common-investor"
                  >
                    {closingDate}
                  </Moment>
                  <span className="content-value-investor common-investor">
                    Ngày còn lại
                  </span>
                </div>
              </div>
              <div className="btn-investor-now">
                <button onClick={() => router.push("/project/payment")}>
                  Đầu tư ngay
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={3} />
      </Row>
    </SBannerProject>
  );
};

export default BannerProjectDetail;
