/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { SBanner } from "./styled";
import useWindowResize from "../../hook/useResize";
import { useRouter } from "next/router";
import useTranslation from "../../hook/useTranslation";
import { SETTING } from "./contants";
import Slider from "react-slick";

const Banner = () => {
  const { t } = useTranslation();
  const size = useWindowResize();
  const router = useRouter();
  return (
    <>
      <SBanner>
        <Row align="middle">
          <Col xl={10}>
            <div className="wrap-banner">
              <div className="title-banner wrap-banner">
                <div className="title">
                  <span>{t.platform_investment}</span>
                  {size.width <= 414 && <span> {t.for}</span>}
                </div>
              </div>
              <div className="content">
                <span>{t.content_banner_home_one}</span>
                <br />
                <span>{t.content_banner_home_two}</span>
              </div>
              {size.width > 414 && (
                <div className="btn">
                  <button
                    className="project pointed"
                    onClick={() => router.push("/investor")}
                  >
                    {t.investor_banner}
                  </button>
                  <button
                    className="call-investor pointed"
                    onClick={() => router.push("/company")}
                  >
                    {t.raise_banner}
                  </button>
                </div>
              )}
            </div>
          </Col>
          <Col xl={4} />
          <Col xl={10} xs={24}>
            <Slider {...SETTING}>
              <div>
                <img
                  height={size.width > 414 ? 383 : 240}
                  alt="banner1"
                  src="/image/home/new-banner1.jpg"
                  className="image-slider"
                />
                <div className="content-quote">
                  <div className="head">
                    <span className="name">Yetunde Duro-Emanuel</span>
                    <span>Investor since May 2018</span>
                  </div>
                  <span className="line" />
                  <div>
                    “I want to support founders who are building new solutions
                    that will move the world forward.”
                  </div>
                </div>
              </div>
              <div>
                <img
                  height={size.width > 414 ? 383 : 240}
                  alt="banner1"
                  src="/image/home/new-banner2.jpg"
                  className="image-slider"
                />
                <div className="content-quote">
                  <div className="head">
                    <span className="name">Sarah Wood</span>
                    <span>Investor since May 2018</span>
                  </div>
                  <span className="line" />
                  <div>
                    “I was able to invest a small amount into a company I
                    believed in. I never thought I’d be able to do that at 25.”
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="image-slider"
                  height={size.width > 414 ? 383 : 240}
                  alt="banner1"
                  src="/image/home/new-banner3.jpg"
                />
                <div className="content-quote">
                  <div className="head">
                    <span className="name">Andrew Roosevelt</span>
                    <span>Investor since May 2018</span>
                  </div>
                  <span className="line" />
                  <div>
                    “Investing in private companies is so important because
                    there are so many steps between the founding of a company
                    and becoming a publicly traded company.”
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="image-slider"
                  height={size.width > 414 ? 383 : 240}
                  alt="banner1"
                  src="/image/home/new-banner4.jpg"
                />
                <div className="content-quote">
                  <div className="head">
                    <span className="name">Chaarvi Amit Badani</span>
                    <span>Investor since May 2018</span>
                  </div>
                  <span className="line" />
                  <div>
                    “I invest in education and climate justice because I’ve seen
                    firsthand how impactful those businesses can be.”
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="image-slider"
                  height={size.width > 414 ? 383 : 240}
                  alt="banner1"
                  src="/image/home/new-banner5.jpg"
                />
                <div className="content-quote">
                  <div className="head">
                    <span className="name">Javier Correa</span>
                    <span>Investor since May 2018</span>
                  </div>
                  <span className="line" />
                  <div>
                    “I see investing as an opportunity to create financial
                    freedom and have a real impact on a company’s future.”
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
          {size.width <= 414 && (
            <div className="btn">
              <button className="project">{t.investor_banner}</button>
              <button className="call-investor">{t.raise_banner}</button>
            </div>
          )}
        </Row>
      </SBanner>
    </>
  );
};

export default Banner;
