import { Col, Row, Tabs } from "antd";
import Image from "next/image";
import React from "react";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
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
  presentDetails,
  presentDocuments,
}) => {
  return (
    <SContentProject>
      <Row justify="center">
        <Col xs={22} xl={8}>
          <Tabs defaultActiveKey="1">
            {presentDetails &&
              presentDetails.length > 0 &&
              presentDetails.map((ele, index) => {
                const key = index + 1;
                return (
                  <Tabs.TabPane tab={ele.title} key={`${key}`}>
                    <div
                      className="wrap-tab"
                      dangerouslySetInnerHTML={{ __html: ele.details }}
                    />
                  </Tabs.TabPane>
                );
              })}
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
                {presentDocuments &&
                  presentDocuments.length > 0 &&
                  presentDocuments.map((ele, index) => {
                    return (
                      <a
                        key={index}
                        download
                        href={`${MEDIA_PUBLIC}${ele?.file?.url}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div>
                          <Image
                            alt="icon-document"
                            src="/image/project/icon-document.png"
                            width={44}
                            height={44}
                          />
                          <span>{ele.fileName}</span>
                        </div>
                      </a>
                    );
                  })}
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
