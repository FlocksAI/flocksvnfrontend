import { Col, Divider, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { CONTENT_PROJECT } from "../../constant/content-project";
import { SDetailProject } from "./styled";

const DetailBlog = () => {
  const [list] = useState(new Array(2).fill(0));
  return (
    <SDetailProject>
      <Row justify="center">
        <Col xs={22} xl={8}>
          {list.map((el) => (
            <div className="wrap-tab" key={el}>
              <Image
                alt="avatar-team"
                src="/image/project/banner-tab.png"
                width={684}
                height={360}
              />
              <div className="wrap-head">
                <span className="title">Title 1</span>
                <span className="content">{CONTENT_PROJECT}</span>
              </div>
            </div>
          ))}
        </Col>
        <Col xl={2} />
        <Col xs={22} xl={4}>
          <div className="wrap-tab-artical">
            <div className="wrap-artical">
              <span>IN THIS ARTICAL</span>
              <Divider />
              <span className="mb-2">
                Lorem ipsum dolor sit amet our adipiscing elit.
              </span>
              <span className="mb-2">
                Lorem ipsum dolor sit amet our adipiscing elit.
              </span>
              <span className="mb-2">
                Lorem ipsum dolor sit amet our adipiscing elit.
              </span>
              <Divider />
              <div>
                <span>Share</span>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} />
      </Row>
    </SDetailProject>
  );
};

export default DetailBlog;
