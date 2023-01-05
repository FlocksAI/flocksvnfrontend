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
              {/* <span className="description-team">
                Lorem ipsum dolor sit amet consectetur. Varius quis lobortis
                nunc.{" "}
              </span> */}
            </div>
            <Row>
              {companyPresentTeamMember.map((ele, index) => {
                return (
                  <Col xl={6} xs={24} key={index}>
                    <CardImageTeam
                      image={ele.image.url}
                      name={ele.name}
                      position={ele.position}
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

const CardImageTeam = ({ image, position, name }: any) => {
  const [src, setSrc] = useState(`${MEDIA_PUBLIC}${image?.url}`);
  return (
    <div className="wrap-avatar-team">
      <Image
        onError={() => setSrc("/image/project/team1.png")}
        alt="avatar-team"
        src={src || "/image/project/team1.png"}
        width={140}
        height={140}
      />
      <div className="title-team-away">
        <span className="name">{name}</span>
        <span>{position}</span>
      </div>
    </div>
  );
};
export default TeamProject;
