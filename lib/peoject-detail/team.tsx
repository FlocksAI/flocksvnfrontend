import { Col, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
import { ITeamProjectDetail } from "./interface";

const TeamProject: React.FC<ITeamProjectDetail> = ({
  companyPresentTeamMember,
  companyName,
}) => {
  if (!companyPresentTeamMember || companyPresentTeamMember.length === 0)
    return;
  return (
    <>
      <Row justify="center">
        <Col xl={22}>
          <div className="wrap-team">
            <div className="title-team">
              <span className="name-team">{companyName} Team</span>
            </div>
            <Row>
              {companyPresentTeamMember.map((ele, index) => {
                return (
                  <Col xl={6} xs={24} key={index}>
                    <CardImageTeam
                      image={ele.image.url}
                      name={ele.name}
                      position={ele.position}
                      about={ele.about}
                      linkedin={ele.linkedin}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

const CardImageTeam = ({ image, position, name, linkedin, about }: any) => {
  const [src, setSrc] = useState(`${MEDIA_PUBLIC}${image}`);
  return (
    <div className="wrap-avatar-team">
      <Image
        onError={() => setSrc("/image/home/avatar-head-detail.png")}
        alt="avatar-team"
        src={src}
        width={140}
        height={140}
        className="image-team-member-main"
      />
      <div className="title-team-away">
        <span className="name">{name}</span>
        <span>{position}</span>
        <span className="about-team-member mb-2">{about}</span>
        <a
          target="_blank"
          href={linkedin || "https://www.linkedin.com/feed/"}
          rel="noreferrer"
        >
          <Image
            alt="footer-icon"
            src="/image/home/LinkedIn-Negative.png"
            width={20}
            height={20}
            className="pointed"
          />
        </a>
      </div>
    </div>
  );
};
export default TeamProject;
