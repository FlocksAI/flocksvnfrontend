import Image from "next/image";
import React from "react";
import { IContentHead } from "./interface";
import { SContentProjectHead } from "./styled";

const ContentProjectHead: React.FC<IContentHead> = ({
  companyName,
  companySubTitle,
}) => {
  return (
    <SContentProjectHead>
      <div className="wrap-avatar-head">
        <Image
          alt="logo"
          src="/image/home/avatar-head-detail.png"
          width={50}
          height={50}
          className="logo-image pointed"
        />
        <div className="content-name-project">
          <span className="name-company">{companyName}</span>
          <span className="description">{companySubTitle}</span>
        </div>
      </div>
      <div className="wrap-btn-head">
        <button>Travel</button>
        <button>Travel</button>
      </div>
    </SContentProjectHead>
  );
};

export default ContentProjectHead;
