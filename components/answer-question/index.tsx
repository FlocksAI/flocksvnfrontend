import { Col, Collapse, Row } from "antd";
import Image from "next/image";
import React from "react";
import { SAnswerQuestion } from "./styled";

const { Panel } = Collapse;
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum ultricies tempus euismod.Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Vestibulum ultricies tempus euismod.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum ultricies tempus euismod.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum ultricies tempus euismod.
`;
const AnswerQuestion = () => {
  return (
    <>
      <SAnswerQuestion>
        <div className="title">
          <span className="answer">Câu hỏi thường gặp (FAQs)</span>
          <span className="content">
            Gọi vốn & Đầu tư trên nền tảng Flocks AI Những thông tin giúp ích
            cho bạn
          </span>
        </div>
        <Row justify="center">
          <Col xs={24} xl={8}>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <Image
                    alt="icon"
                    src="/image/home/plus.png"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    alt="icon"
                    src="/image/home/minus.png"
                    width={32}
                    height={32}
                  />
                )
              }
            >
              <Panel header="1. Lorem Ipsum Dolar Sit Amet ?" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="2. Lorem Ipsum Dolar Sit Amet ?" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="3. Lorem Ipsum Dolar Sit Amet ?" key="3">
                <p>{text}</p>
              </Panel>
              <Panel header="4. Lorem Ipsum Dolar Sit Amet ?" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
          <Col span={1} />
          <Col xs={24} xl={8}>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <Image
                    alt="icon"
                    src="/image/home/plus.png"
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    alt="icon"
                    src="/image/home/minus.png"
                    width={32}
                    height={32}
                  />
                )
              }
            >
              <Panel header="5. Lorem Ipsum Dolar Sit Amet ?" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="6. Lorem Ipsum Dolar Sit Amet ?" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="7. Lorem Ipsum Dolar Sit Amet ?" key="3">
                <p>{text}</p>
              </Panel>
              <Panel header="8. Lorem Ipsum Dolar Sit Amet ?" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </SAnswerQuestion>
    </>
  );
};

export default AnswerQuestion;
