import Image from "next/image";
import React from "react";
import { ICardMember } from "./interface";
import { SCardMember } from "./styled";

const CardMember: React.FC<ICardMember> = ({
  facebook,
  linkedIn,
  name,
  position,
  twitter,
  imgSrc,
}) => {
  return (
    <SCardMember>
      <Image
        alt="avatar-team"
        src={imgSrc || "/image/project/team1.png"}
        width={90}
        height={90}
        style={{
          position: "relative",
          top: "-40px",
          outline: "8px solid #fff",
          borderRadius: "50%",
        }}
      />
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="about-me">
        <span>{position}</span>
      </div>
      <div className="more-info">
        <a
          target="_blank"
          href={facebook || "https://facebook.com/"}
          rel="noreferrer"
        >
          <Image
            alt="footer-icon"
            src="/image/home/Facebook-Negative.png"
            width={20}
            height={20}
          />
        </a>
        <a
          target="_blank"
          href={twitter || "https://facebook.com/"}
          rel="noreferrer"
        >
          <Image
            alt="footer-icon"
            src="/image/home/Twitter-Negative.png"
            width={20}
            height={20}
          />
        </a>
        <a
          target="_blank"
          href={linkedIn || "https://facebook.com/"}
          rel="noreferrer"
        >
          <Image
            alt="footer-icon"
            src="/image/home/LinkedIn-Negative.png"
            width={20}
            height={20}
          />
        </a>
      </div>
    </SCardMember>
  );
};

export default CardMember;
