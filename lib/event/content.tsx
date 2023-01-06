import { Col, Row } from "antd";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
import { getMonthDay } from "../../helper";
import { IEvent } from "./interface";
import { SEventContent } from "./styled";

const ContentEvent: React.FC<IEvent> = ({
  content,
  headerImage,
  title,
  executionDateStart,
}) => {
  const [src, setSrc] = useState(`${MEDIA_PUBLIC}${headerImage?.url}`);
  return (
    <Row>
      <Col xs={24} xl={10}>
        <SEventContent>
          <div className="title-date">{getMonthDay(executionDateStart)}</div>
          <div>
            <Image
              onError={() => setSrc("/image/home/people.png")}
              width={480}
              height={270}
              alt="event"
              src={src}
              className="event-img"
            />
          </div>
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="content">
            <span>{content}</span>
          </div>
        </SEventContent>
      </Col>
    </Row>
  );
};

export default ContentEvent;
