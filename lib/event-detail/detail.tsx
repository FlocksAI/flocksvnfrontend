import { Col, Divider, Row } from "antd";
import Image from "next/image";
import React from "react";
import { IContentDetailEvent } from "./interface";
import { SDetailEvent } from "./styled";

const DetailEvent: React.FC<IContentDetailEvent> = ({ rawContent }) => {
  return (
    <>
      <SDetailEvent>
        <Row justify="center">
          <Col xs={22} xl={8}>
            <div className="wrap-tab">
              <div
                className="wrap-head"
                dangerouslySetInnerHTML={{ __html: rawContent }}
              />
            </div>
          </Col>
          <Col xl={2} />
          {/* <Col xs={22} xl={4}>
            <div className="wrap-tab-artical">
              <Image
                alt="avatar-team"
                src={"/image/project/banner-tab.png"}
                width={330}
                height={162}
              />
              <div className="wrap-content-sub">
                <span className="title-content-sub">
                  Lorem ipsum dolor sit amet consect.
                </span>
                <span className="content-sub">
                  Lorem ipsum dolor sit amet, conetur adipis. Lorem ipsum dolo
                  dolor sit.
                </span>
              </div>
            </div>
          </Col> */}
          <Col xl={4} />
        </Row>
      </SDetailEvent>
    </>
  );
};

export default DetailEvent;
