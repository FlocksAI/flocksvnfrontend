import Image from "next/image";
import React from "react";
import { SContentHeadBlog } from "./styled";

const ContentHeadBlog = () => {
  return (
    <SContentHeadBlog>
      <div className="wrap-btn-head">
        <button>For Investor</button>
        <button>Travel</button>
      </div>
      <div className="content">
        <span>Lorem ipsum dolor sit amet consect Culor consect .</span>
      </div>
      <div className="wrap-avatar-name-blog">
        <Image
          className="avatar-blog"
          alt="avatar-blog"
          src="/image/project/avatar-blog.png"
          width={50}
          height={50}
        />
        <span className="name-time">
          Kevin Princess | Last Updated: 23 Apr 2022
        </span>
      </div>
    </SContentHeadBlog>
  );
};

export default ContentHeadBlog;
