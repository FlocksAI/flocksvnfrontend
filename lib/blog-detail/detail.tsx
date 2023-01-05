import { Col, Divider, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
import { IDetailBlogContent } from "./interface";
import { SDetailProject } from "./styled";

const DetailBlog: React.FC<IDetailBlogContent> = ({ content, headerImage }) => {
  const [src, setSrc] = useState(`${MEDIA_PUBLIC}${headerImage?.url}`);
  return (
    <SDetailProject>
      <Row justify="center">
        <Col xs={22} xl={8}>
          <div className="wrap-tab">
            <Image
              onError={() => setSrc("/image/project/banner-tab.png")}
              alt="avatar-team"
              src={src}
              width={684}
              height={360}
            />
            <div
              className="wrap-head"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
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
