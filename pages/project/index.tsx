import { Col, Row } from "antd";
import React, { useState } from "react";
import CardIndex from "../../components/card";
import SearchBox from "../../components/search-box";
import SProject from "./styled";

const ProjectPage = () => {
  const [card] = useState(new Array(8).fill(0));
  console.log(card);
  return (
    <>
      <SProject>
        <div className="list-project">
          <SearchBox />
          <Row justify="center">
            {card.map((el) => {
              return (
                <Col key={el} span={9} className="col-card">
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
