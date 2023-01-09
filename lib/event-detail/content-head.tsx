import {
  AimOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import React, { useState } from "react";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
import { formatedDate, getTime } from "../../helper";
import { IContentHeadDetail } from "./interface";
import { SContentHeadEventDetail } from "./styled";

const ContentHeadEventDetail: React.FC<IContentHeadDetail> = ({
  headerImage,
  location,
  title,
  executionDateStart,
  executionDateEnd,
}) => {
  const [src, setSrc] = useState(`${MEDIA_PUBLIC}${headerImage?.url}`);
  return (
    <>
      <SContentHeadEventDetail>
        <div className="content">
          <span>{title}</span>
        </div>
        <div className="wrap-avatar-name-blog">
          <Image
            onError={() => setSrc("/image/project/avatar-blog.png")}
            className="avatar-blog"
            alt="avatar-blog"
            src={src}
            width={40}
            height={40}
          />
        </div>
        <div className="wrap-icon">
          <div className="icon-info">
            <CalendarOutlined />
            {formatedDate(executionDateStart)}
          </div>
          <div className="icon-info">
            <ClockCircleOutlined />
            {`${getTime(executionDateStart)} - ${getTime(executionDateEnd)}`}
          </div>
          <div className="icon-info">
            <AimOutlined />
            {location}
          </div>
        </div>
      </SContentHeadEventDetail>
    </>
  );
};

export default ContentHeadEventDetail;
