import { Col, Row } from "antd";
import React, { useState } from "react";
import CardIndex from "../../components/card";
import SearchBox from "../../components/search-box";
import SubHeadIndex from "../../components/sub-header";
import { SProject } from "./styled";
import useProject from "../../hook/project/useProject";

const ProjectIndex = () => {
  const [card] = useState(new Array(8).fill(0));
  const { dataProject } = useProject();
  console.log(dataProject);
  return (
    <SProject>
      <SubHeadIndex
        title="Our Projects"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua sed."
        image="/image/home/banner-sub-head.png"
      />
      <div className="list-project">
        <Row justify="center">
          <Col xs={24} xl={18} className="col-mobile-search">
            <SearchBox />
          </Col>
        </Row>
        <Row justify="center">
          {dataProject.map((el) => {
            return (
              <Col key={el} xs={24} xl={9} className="col-card">
                <CardIndex
                  id={el.id}
                  abstract={el.abstract}
                  collectedBudget={el.collectedBudget}
                  companyName={el.companyName}
                  investmentTarget={el.investmentTarget}
                  numberInvestors={el.numberInvestors}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </SProject>
  );
};

export default ProjectIndex;
