import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { SBanner } from "./styled";
import useWindowResize from "../../hook/useResize";
import { useRouter } from "next/router";
import useTranslation from "../../hook/useTranslation";

const Banner = () => {
  const { t } = useTranslation();
  const size = useWindowResize();
  const router = useRouter();
  return (
    <>
      <SBanner>
        <Row>
          <Col xs={24} xl={24}>
            <div className="title-banner wrap-banner">
              <div className="title">
                <span>{t.platform_investment}</span>
                {size.width <= 414 && <span> {t.for}</span>}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={10}>
            <div className="wrap-banner">
              <div className="title">
                {size.width > 414 && <span>{t.for}</span>}
                <span className="vietnam"> {t.people_vietnames}</span>
              </div>
              <div className="content">
                <span className="choose">{t.select_evaluation_investment}</span>
                <br />
                <span>
                  {t.content_banner_home_one}
                </span>
                <br />
                <span>
                  {t.content_banner_home_two}
                </span>
                <br />
                <span>{t.content_banner_home_three}</span>
              </div>
              {size.width > 414 && (
                <div className="btn">
                  <button
                    className="project pointed"
                    onClick={() => router.push("/investor")}
                  >
                    {t.projects_banner}
                  </button>
                  <button
                    className="call-investor pointed"
                    onClick={() => router.push("/company")}
                  >
                    {t.investor_banner}
                  </button>
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
              <button className="project">{t.projects_banner}</button>
              <button className="call-investor">{t.investor_banner}</button>
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
