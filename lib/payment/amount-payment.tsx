import { Col, Input, Row, Divider, Progress } from "antd";
import Image from "next/image";
import React from "react";
import { SPayment } from "./styled";
import useWindowResize from "../../hook/useResize";

const AmountPayment = () => {
  const size = useWindowResize();
  return (
    <SPayment>
      <Row justify="center">
        <Col xs={24} xl={8}>
          {size.width > 414 ? (
            <div>
              <div className="header-investor mb-4">
                <span className="title">Investment Amount</span>
                <span className="content">
                  Lorem ipsum dolor sit amet consectetur. Tortor amet a eget
                  integer vitae turpis in.
                </span>
              </div>
              <div className="mb-6 inp-value">
                <Input />
              </div>
              <div className="header-investor mb-3">
                <span className="title">Payment Information</span>
                <span className="content">
                  Lorem ipsum dolor sit amet consectetur. Tortor amet a eget
                  integer vitae turpis in.
                </span>
              </div>
              <div className="mb-6">
                <Image
                  alt="btn-payment"
                  src="/image/project/btn-momo-payment.png"
                  width={160}
                  height={72}
                  className="mr-3"
                />
                <Image
                  alt="btn-payment"
                  src="/image/project/sub-btn-momo-payment.png"
                  width={160}
                  height={72}
                />
              </div>
              <div className="btn-investor-now">
                <button>Đầu tư ngay</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="wrap-info-day">
                <span className="started-day">Started: 09/Oct/2022</span>
                <Divider />
                <span className="total-value">4,823,047đ</span>
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
                    <span className="value-investor common-investor">2000</span>
                    <span className="content-value-investor common-investor">
                      Nhà đầu tư
                    </span>
                  </div>
                  <div className="info-timeline">
                    <span className="value-investor common-investor">345</span>
                    <span className="content-value-investor common-investor">
                      Ngày còn lại
                    </span>
                  </div>
                </div>
              </div>
              <div className="wrap-head-document">
                <div className="title-document">
                  <span>Tài liệu</span>
                </div>
                <div>
                  <div>
                    <Image
                      alt="icon-document"
                      src="/image/project/icon-document.png"
                      width={44}
                      height={44}
                    />
                    <span>Startup required information</span>
                  </div>
                  <div>
                    <Image
                      alt="icon-document"
                      src="/image/project/icon-document.png"
                      width={44}
                      height={44}
                    />
                    <span>Startup required information</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Col>
        <Col xl={2} />
        <Col xs={22} xl={5}>
          {size.width > 414 ? (
            <div>
              <div className="wrap-info-day">
                <span className="started-day">Started: 09/Oct/2022</span>
                <Divider />
                <span className="total-value">4,823,047đ</span>
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
                    <span className="value-investor common-investor">2000</span>
                    <span className="content-value-investor common-investor">
                      Nhà đầu tư
                    </span>
                  </div>
                  <div className="info-timeline">
                    <span className="value-investor common-investor">345</span>
                    <span className="content-value-investor common-investor">
                      Ngày còn lại
                    </span>
                  </div>
                </div>
              </div>
              <div className="wrap-head-document">
                <div className="title-document">
                  <span>Tài liệu</span>
                </div>
                <div>
                  <div>
                    <Image
                      alt="icon-document"
                      src="/image/project/icon-document.png"
                      width={44}
                      height={44}
                    />
                    <span>Startup required information</span>
                  </div>
                  <div>
                    <Image
                      alt="icon-document"
                      src="/image/project/icon-document.png"
                      width={44}
                      height={44}
                    />
                    <span>Startup required information</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="header-investor mb-4">
                <span className="title">Investment Amount</span>
                <span className="content">
                  Lorem ipsum dolor sit amet consectetur. Tortor amet a eget
                  integer vitae turpis in.
                </span>
              </div>
              <div className="mb-6 inp-value">
                <Input />
              </div>
              <div className="header-investor mb-3">
                <span className="title">Payment Information</span>
                <span className="content">
                  Lorem ipsum dolor sit amet consectetur. Tortor amet a eget
                  integer vitae turpis in.
                </span>
              </div>
              <div className="mb-6">
                <Image
                  alt="btn-payment"
                  src="/image/project/btn-momo-payment.png"
                  width={160}
                  height={72}
                  className="mr-3"
                />
                <Image
                  alt="btn-payment"
                  src="/image/project/sub-btn-momo-payment.png"
                  width={160}
                  height={72}
                />
              </div>
              <div className="btn-investor-now">
                <button>Đầu tư ngay</button>
              </div>
            </div>
          )}
        </Col>
        <Col xl={3} />
      </Row>
    </SPayment>
  );
};

export default AmountPayment;
