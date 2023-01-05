import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
import { IContentHeader } from "./interface";
import { SContentHeadBlog } from "./styled";

const ContentHeadBlog: React.FC<IContentHeader> = ({
  author,
  modifiedAt,
  tags,
  title,
}) => {
  const [src, setSrc] = useState(`${MEDIA_PUBLIC}${author?.avatar.url}`);
  return (
    <SContentHeadBlog>
      <div className="wrap-btn-head">
        {tags &&
          tags.map((el, index) => {
            return <button key={index}>{el}</button>;
          })}
      </div>
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
        <span className="name-time">
          {author?.fullName} | Last Updated:{" "}
          {moment(modifiedAt).format("DD MM YYYY")}
        </span>
      </div>
    </SContentHeadBlog>
  );
};

export default ContentHeadBlog;
