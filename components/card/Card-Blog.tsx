/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
import { formatedDate } from "../../helper";
import { ICardBlog } from "./interface";
import { SCardBlog } from "./styled";

const CardBlogIndex: React.FC<ICardBlog> = ({
  author,
  date,
  headerImage,
  rawContent,
  title,
  slug,
}) => {
  const [src, setSrc] = useState(`${MEDIA_PUBLIC}${headerImage?.url}`);
  const router = useRouter();
  const [srcAvatar, setSrcAvatar] = useState(
    `${MEDIA_PUBLIC}${author?.avatar.url}`
  );
  return (
    <>
      <SCardBlog>
        <div className="wrap-mobile">
          <div className="wrap-head-card">
            <div className="parent-image">
              <Image
                onError={() => setSrc("/image/home/people.png")}
                alt="people"
                src={src}
                width={480}
                height={270}
                className="main-image"
              />
            </div>
          </div>
          <div className="wrap-content-card-blog">
            <div className="title pointed">
              <span onClick={() => router.push(`/blog/${slug}`)}>{title}</span>
            </div>
            <div className="content">
              <span>{rawContent}</span>
            </div>
            <div className="wrap-avatar">
              <div className="wrap-img">
                <Image
                  onError={() => setSrcAvatar("/image/home/avatar-men.png")}
                  alt="avatar"
                  src={srcAvatar}
                  width={40}
                  height={40}
                  className="avatar-image"
                />
                <span className="name">{author.fullName}</span>
              </div>
              <div className="day-ago">{formatedDate(date)}</div>
            </div>
          </div>
        </div>
      </SCardBlog>
    </>
  );
};

export default CardBlogIndex;
