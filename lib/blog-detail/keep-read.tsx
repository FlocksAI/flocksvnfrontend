import { Col, Row } from "antd";
import React, { useState } from "react";
import CardBlogIndex from "../../components/card/Card-Blog";
import { SKeepRead } from "./styled";

const KeepReadIndex = () => {
  const [list] = useState(new Array(4).fill(0));
  return (
    <SKeepRead>
      <div className="title-keep-read">
        <span>Keep Reading</span>
      </div>
      <Row justify="center">
        {list.map((el) => (
          <Col key={el} xl={9} className="col-card">
            <CardBlogIndex />
          </Col>
        ))}
      </Row>
    </SKeepRead>
  );
};

export default KeepReadIndex;
