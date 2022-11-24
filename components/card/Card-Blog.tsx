/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { SCardBlog } from "./styled";

const CardBlogIndex = () => {
  return (
    <>
      <SCardBlog>
        <div className="wrap-mobile">
          <div className="wrap-head-card">
            <div className="parent-image">
              <img
                alt="people"
                src="/image/home/people.png"
                className="main-image"
              />
            </div>
          </div>
          <div className="wrap-content-card-blog">
            <div className="title">
              <span>Lorem ipsum dolor sit amet consect.</span>
            </div>
            <div className="content">
              <span>
                Lorem ipsum dolor sit amet, conetur adipis. Lorem ipsum dolo
                dolor sit amet, conetur adipis.
              </span>
            </div>
            <div className="wrap-avatar">
              <div className="wrap-img">
                <Image
                  alt="avatar"
                  src="/image/home/avatar-men.png"
                  width={40}
                  height={40}
                  className="avatar-image"
                />
                <span className="name">Kevin Princess</span>
              </div>
              <div className="day-ago">3 days ago</div>
            </div>
          </div>
        </div>
      </SCardBlog>
    </>
  );
};

export default CardBlogIndex;
