import React from "react";
import SFounderTeam from "./styled";
import Image from "next/image";
import { Col, Row, Tooltip } from "antd";

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
              <Tooltip
                placement="bottom"
                title={
                  "Deal maverick and successful entrepreneur with over 20 years in the entertainment and hospitality industry. Stella is a General Committee Member of the HK Business Association Vietnam & the former Director of Marketing for Furama Danang Resort.Currently, she invests & operates several F&B businesses in Asia as well as heads the Charity Board of HKBAV."
                }
              >
                <Image
                  alt="team"
                  src="/image/home/StellaSo.png"
                  width={212}
                  height={324}
                  className="pointed"
                />
              </Tooltip>
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Tooltip
                placement="bottom"
                title={
                  "Venture capitalist, explorer, serial entrepreneur, & film producer.Matt is the co-founder of PO8 the 2018 Inter - American Development Bank recipient for most innovative Startup. Selected by The Dubai government as the top 10 Blockchain Project in the World 2019. He is also one of the foremost thought leaders on Non-Fungible Tokens. He lived 15 years in China and held advisory roles with Uber, WeWork, & SinoLatam. To date, he has overseen 3 successful technology exits valued over eight-figures."
                }
              >
                <Image
                  alt="team"
                  src="/image/home/MatthewArnett.png"
                  width={212}
                  height={324}
                  className="pointed"
                />
              </Tooltip>
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Tooltip
                placement="bottom"
                title={
                  "Spent more than 15 years at SGS Group the world's leading testing, inspection & certification company in an executive management role. She brings more than 30 years experience in the compliance industry with profound expertise in the governance of world class standards."
                }
              >
                <Image
                  alt="team"
                  src="/image/home/SusanneSun.png"
                  width={212}
                  height={324}
                  className="pointed"
                />
              </Tooltip>
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Tooltip
                placement="bottom"
                title={
                  "Entrepreneurship & Investment Brand Strategist & Tech Love"
                }
              >
                <Image
                  alt="team"
                  src="/image/home/Thomas-Doan.png"
                  width={212}
                  height={324}
                  className="pointed"
                />
              </Tooltip>
            </Col>
          </Row>
        </div>
        <div className="team">
          <Row justify="space-evenly" className="row-mobile">
            <Col xs={24} xl={6} className="mobile">
              <Tooltip
                placement="bottom"
                title={
                  "Brings almost 20 years of experience in the legal & consultancy industry & is the founding partner of Trust Link Law Firm which specializes in investment law, mergers, acquisitions, intellectual property & outbound investment."
                }
              >
                <Image
                  alt="team"
                  src="/image/home/TracyNguyen.png"
                  width={212}
                  height={324}
                  className="pointed"
                />
              </Tooltip>
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Tooltip
                placement="bottom"
                title={
                  "Brings more than 10 years of professional experience in entrepreneurship, Technical Lead, iOS Development, & Artificial intelligence solutions. Former Google lead of Afghanistan Map Makers which charted the unmapped territories of Afghanistan. Saifuddin has been an answer for governments in Afghanistan, Denmark, Turkey & Iran with e-governance, digital accounting & e- learning systems. He has been a Computer Science lecturer at Herat University & won the DEWA prize for best solution which help farmers learn, cultivate, & digitalize their products. He was awarded the prestigious UNDP Hack4 Integrity award for best anti-corruption technology solution which prevents students in higher education from plagiarising or re-submitting thesis research papers. In 2020, he also won a special prize in Cyber Tech Accord competition."
                }
              >
                <Image
                  alt="team"
                  src="/image/home/Saiffudin Sepher.png"
                  width={212}
                  height={324}
                  className="pointed"
                />
              </Tooltip>
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Tooltip
                placement="bottom"
                title={"Analytic Consulting Financial Analyst"}
              >
                <Image
                  alt="team"
                  src="/image/home/Liz-Pham.png"
                  width={212}
                  height={324}
                  className="pointed"
                />
              </Tooltip>
            </Col>
            <Col xs={24} xl={6} className="mobile">
              <Tooltip
                placement="bottom"
                title={"Communication Specialist User Experience Discoverer"}
              >
                <Image
                  alt="team"
                  src="/image/home/Son-Pham.png"
                  width={212}
                  height={324}
                  className="pointed"
                />
              </Tooltip>
            </Col>
          </Row>
        </div>
      </SFounderTeam>
    </>
  );
};

export default FounderTeam;
