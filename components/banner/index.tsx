import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { SBanner } from "./styled";
import useWindowResize from "../../hook/useResize";

const Banner = () => {
  const size = useWindowResize();
  return (
    <>
      <SBanner>
        <Row>
          <Col xs={24} xl={24}>
            <div className="title-banner wrap-banner">
              <div className="title">
                <span>Nền tảng đầu tư thông minh</span>
                {size.width <= 414 && <span> Cho</span>}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={10}>
            <div className="wrap-banner">
              <div className="title">
                {size.width > 414 && <span>Cho</span>}
                <span className="vietnam"> Người Việt.</span>
              </div>
              <div className="content">
                <span className="choose">Lựa chọn. Đánh giá. Đầu tư.</span>
                <br />
                <span>
                  Trở thành một phần của các Dự án tiềm năng được thẩm định
                </span>
                <br />
                <span>
                  chuyên nghiệp và khám phá các khoản lợi nhuận khi đầu tư
                </span>
                <br />
                <span>trên nền tảng Flocks AI.</span>
              </div>
              {size.width > 414 && (
                <div className="btn">
                  <button className="project">Khám phá Dự án</button>
                  <button className="call-investor">Gọi vốn Đầu tư</button>
                </div>
              )}
            </div>
          </Col>
          <Col className="image-banner" xl={12} xs={24}>
            <Image
              alt="banner"
              src="/image/home/banner.png"
              fill
              className="image"
            />
          </Col>
          {size.width <= 414 && (
            <div className="btn">
              <button className="project">Khám phá Dự án</button>
              <button className="call-investor">Gọi vốn Đầu tư</button>
            </div>
          )}
        </Row>
        {/* <Row>
          <Col>
            <div>
              <div className="title-head-bottom">
                Đồng hành cùng các đối tác uy tín.
              </div>
              <div className="wrap-image">
                <div className="img-content">
                  <Image
                    alt="binance"
                    src="/image/home/binance.png"
                    width={160}
                    height={72}
                  />
                </div>
                <div className="img-content">
                  <Image
                    alt="trust-link"
                    src="/image/home/trust-link.png"
                    width={160}
                    height={72}
                  />
                </div>
                <div className="img-content">
                  <Image
                    alt="sgs"
                    src="/image/home/sgs.png"
                    width={160}
                    height={72}
                  />
                </div>
                <div className="img-content">
                  <Image
                    alt="momo"
                    src="/image/home/momo.png"
                    width={160}
                    height={72}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
      </SBanner>
    </>
  );
};

export default Banner;
