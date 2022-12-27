import { Col, Pagination, Row } from "antd";
import React from "react";
import CardIndex from "../../components/card";
import SearchBox from "../../components/search-box";
import SubHeadIndex from "../../components/sub-header";
import { SProject } from "./styled";
import useProject from "../../hook/project/useProject";

const ProjectIndex = () => {
  const { dataProject, count, setPage } = useProject();
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
                  collectedBudget={Number(el.collectedBudget)}
                  companyName={el.companyName}
                  investmentTarget={Number(el.investmentTarget)}
                  numberInvestors={el.numberInvestors}
                  coverImage={el.coverImage}
                />
              </Col>
            );
          })}
        </Row>
        <div className="card-pagination">
          <Pagination
            defaultCurrent={1}
            total={count}
            onChange={(e) => setPage(e)}
          />
        </div>
      </div>
    </SProject>
  );
};

export default ProjectIndex;
