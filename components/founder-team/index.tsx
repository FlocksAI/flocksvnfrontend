import React from "react";
import SFounderTeam from "./styled";
import Image from "next/image";
import { Col, Row } from "antd";

const FounderTeam = () => {
  return (
    <>
      <SFounderTeam>
        <div className="title">
          <span className="founder">Đội Ngũ Sáng Lập</span>
          <span className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ultricies tempus euismod.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </span>
        </div>
        <div className="team">
          <Row justify="space-evenly" className="row-mobile">
            <Col xs={24} xl={6} className="mobile">
              <Image
                alt="team"
                src="/image/home/StellaSo.png"
                width={212}
                height={324}
              />
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Image
                alt="team"
                src="/image/home/MatthewArnett.png"
                width={212}
                height={324}
              />
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Image
                alt="team"
                src="/image/home/SusanneSun.png"
                width={212}
                height={324}
              />
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Image
                alt="team"
                src="/image/home/Thomas-Doan.png"
                width={212}
                height={324}
              />
            </Col>
          </Row>
        </div>
        <div className="team">
          <Row justify="space-evenly" className="row-mobile">
            <Col xs={24} xl={6} className="mobile">
              <Image
                alt="team"
                src="/image/home/TracyNguyen.png"
                width={212}
                height={324}
              />
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Image
                alt="team"
                src="/image/home/StellaSoCo-founder.png"
                width={212}
                height={324}
              />
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Image
                alt="team"
                src="/image/home/Liz-Pham.png"
                width={212}
                height={324}
              />
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Image
                alt="team"
                src="/image/home/Son-Pham.png"
                width={212}
                height={324}
              />
            </Col>
          </Row>
        </div>
      </SFounderTeam>
    </>
  );
};

export default FounderTeam;
