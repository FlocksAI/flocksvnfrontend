import Image from "next/image";
import React, { useState } from "react";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
import { IContentHead } from "./interface";
import { SContentProjectHead } from "./styled";

const ContentProjectHead: React.FC<IContentHead> = ({
  companyName,
  companySubTitle,
  logoImage,
  companyCategory,
}) => {
  const [src, setSrc] = useState(`${MEDIA_PUBLIC}${logoImage?.url}`);
  return (
    <SContentProjectHead>
      <div className="wrap-avatar-head">
        <Image
          onError={() => setSrc("/image/home/avatar-head-detail.png")}
          alt="logo"
          src={src || "/image/home/avatar-head-detail.png"}
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
        <button>{companyCategory?.name || "Travel"}</button>
      </div>
    </SContentProjectHead>
  );
};

export default ContentProjectHead;
