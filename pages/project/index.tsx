import { Col, Row } from "antd";
import React, { useState } from "react";
import CardIndex from "../../components/card";
import SearchBox from "../../components/search-box";
import SubHeadIndex from "../../components/sub-header";
import SProject from "./styled";

const ProjectPage = () => {
  const [card] = useState(new Array(8).fill(0));
  return (
    <>
      <SProject>
        <SubHeadIndex />
        <div className="list-project">
          <Row justify="center">
            <Col xs={24} xl={18} className="col-mobile-search">
              <SearchBox />
            </Col>
          </Row>
          <Row justify="center">
            {card.map((el) => {
              return (
                <Col key={el} xs={24} xl={9} className="col-card">
                  <CardIndex />
                </Col>
              );
            })}
          </Row>
        </div>
      </SProject>
    </>
  );
};

export default ProjectPage;
