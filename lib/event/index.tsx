import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import HeaderSub from "../../components/header/head-sub";
import useEvent from "../../hook/event/useEvent";
import ContentEvent from "./content";
import HeadEventIndex from "./head";

const EventIndex = () => {
  const [list] = useState(new Array(2).fill(0));
  const { getListEvent, dataEvent } = useEvent();
  useEffect(() => {
    getListEvent();
  }, []);
  return (
    <>
      <HeaderSub isShowHead={true}>
        <HeadEventIndex />
      </HeaderSub>
      <Row justify="center">
        <Col xs={22} xl={18}>
          {dataEvent.map((el, index) => {
            return (
              <ContentEvent
                key={index}
                title={el.tile}
                content={el.content}
                headerImage={el.headerImage}
                executionDateStart={el.executionDateStart}
              />
            );
          })}
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default EventIndex;
