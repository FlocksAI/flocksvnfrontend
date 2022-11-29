import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import { SHeadEvent } from "./styled";

const HeadEventIndex = () => {
  return (
    <>
      <SHeadEvent>
        <Row>
          <Col xl={8}>
            <div className="title-upcoming-event mb-4">
              <span>Upcoming Events</span>
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
              />
            </div>
          </Col>
        </Row>
      </SHeadEvent>
    </>
  );
};

export default HeadEventIndex;
