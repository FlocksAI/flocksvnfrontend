import { Col, Row, Tabs } from "antd";
import Image from "next/image";
import React from "react";
import { CONTENT_PROJECT } from "../../constant/content-project";
import { IContentProjectDetail } from "./interface";
import { SContentProject } from "./styled";

const ContentProject: React.FC<IContentProjectDetail> = ({
  companyName,
  email,
  phoneNumber,
  website,
  facebook,
  instagram,
  linkedin,
  twitter,
}) => {
  return (
    <SContentProject>
      <Row justify="center">
        <Col xs={22} xl={8}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Overview" key="1">
              <div className="wrap-tab">
                <div className="wrap-head">
                  <span className="title">Title 1</span>
                  <span className="content">{CONTENT_PROJECT}</span>
                </div>
                <Image
                  alt="avatar-team"
                  src="/image/project/banner-tab.png"
                  width={684}
                  height={360}
                />
              </div>
              <div className="wrap-tab">
                <div className="wrap-head">
                  <span className="title">Title 2</span>
                  <span className="content">{CONTENT_PROJECT}</span>
                </div>
                <Image
                  alt="avatar-team"
                  src="/image/project/banner-tab.png"
                  width={684}
                  height={360}
                />
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Problems" key="2">
              <div className="wrap-tab">
                <div className="wrap-head">
                  <span className="title">Title 2</span>
                  <span className="content">{CONTENT_PROJECT}</span>
                </div>
                <Image
                  alt="avatar-team"
                  src="/image/project/banner-tab.png"
                  width={684}
                  height={360}
                />
              </div>
              <div className="wrap-tab">
                <div className="wrap-head">
                  <span className="title">Title 3</span>
                  <span className="content">{CONTENT_PROJECT}</span>
                </div>
                <Image
                  alt="avatar-team"
                  src="/image/project/banner-tab.png"
                  width={684}
                  height={360}
                />
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Solution" key="3">
              <div className="wrap-tab">
                <div className="wrap-head">
                  <span className="title">Title 3</span>
                  <span className="content">{CONTENT_PROJECT}</span>
                </div>
                <Image
                  alt="avatar-team"
                  src="/image/project/banner-tab.png"
                  width={684}
                  height={360}
                />
              </div>
              <div className="wrap-tab">
                <div className="wrap-head">
                  <span className="title">Title 3</span>
                  <span className="content">{CONTENT_PROJECT}</span>
                </div>
                <Image
                  alt="avatar-team"
                  src="/image/project/banner-tab.png"
                  width={684}
                  height={360}
                />
              </div>
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Col xl={3} />
        <Col xs={22} xl={4}>
          <div className="wrap-document">
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
            <div>
              <div className="wrap-about-document wrap-head-document">
                <span className="title-document about-company">
                  About {companyName} Company
                </span>
                <span className="common-title-document">Website</span>
                <span className="common-content-document mb-2">{website}</span>
                <span className="common-title-document">Mail</span>
                <span className="common-content-document mb-2">{email}</span>
                <span className="common-title-document">Call</span>
                <span className="common-content-document">{phoneNumber}</span>
                <span className="common-title-document mb-3">Social</span>
                <div className="wrap-icon-document">
                  <a
                    target="_blank"
                    href={facebook || "https://facebook.com/"}
                    rel="noreferrer"
                  >
                    <Image
                      alt="footer-icon"
                      src="/image/home/Facebook-Negative.png"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    target="_blank"
                    href={twitter || "https://facebook.com/"}
                    rel="noreferrer"
                  >
                    <Image
                      alt="footer-icon"
                      src="/image/home/Twitter-Negative.png"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    target="_blank"
                    href={instagram || "https://facebook.com/"}
                    rel="noreferrer"
                  >
                    <Image
                      alt="footer-icon"
                      src="/image/home/Instagram-Negative.png"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    target="_blank"
                    href={linkedin || "https://facebook.com/"}
                    rel="noreferrer"
                  >
                    <Image
                      alt="footer-icon"
                      src="/image/home/LinkedIn-Negative.png"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a
                    target="_blank"
                    href={email || "https://facebook.com/"}
                    rel="noreferrer"
                  >
                    <Image
                      alt="footer-icon"
                      src="/image/home/Google-Negative.png"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={3} />
      </Row>
    </SContentProject>
  );
};

export default ContentProject;
