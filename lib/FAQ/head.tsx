import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import { IHeadFAQ } from "./interface";
import { SHeadFAQ } from "./styled";

const HeadFAQIndex: React.FC<IHeadFAQ> = ({ handSearch }) => {
  return (
    <>
      <SHeadFAQ>
        <Row>
          <Col xl={8}>
            <div className="title-upcoming-event mb-4">
              <span>Frequently Asked Questions</span>
            </div>
            <div className="content-upcoming-event mb-4">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </span>
            </div>
            <div className="input-event">
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search name project"
                onChange={(data) => handSearch(data)}
              />
            </div>
          </Col>
        </Row>
      </SHeadFAQ>
    </>
  );
};

export default HeadFAQIndex;
