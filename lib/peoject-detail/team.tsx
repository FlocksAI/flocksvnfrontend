import { Col, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const TeamProject = () => {
  const [listTeam] = useState(new Array(4).fill(0));
  return (
    <>
      <Row justify="center">
        <Col xl={22}>
          <div className="wrap-team">
            <div className="title-team">
              <span className="name-team">Tesla Team</span>
              <span className="description">
                Lorem ipsum dolor sit amet consectetur. Varius quis lobortis
                nunc.{" "}
              </span>
            </div>
            <Row>
              {listTeam.map((el, index) => (
                <Col xs={24} xl={6} key={index}>
                  <div className="wrap-avatar-team">
                    <Image
                      alt="avatar-team"
                      src="/image/project/team1.png"
                      width={140}
                      height={140}
                    />
                    <div className="title-team-away">
                      <span className="name">Phạm Đức Huy</span>
                      <span>CEO</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TeamProject;
