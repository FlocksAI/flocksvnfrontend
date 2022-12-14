import { Col, Collapse, Row } from "antd";
import Image from "next/image";
import React from "react";
import {
  FAQ_1,
  FAQ_2_1,
  FAQ_2_2,
  FAQ_2_3,
  FAQ_2_4,
  FAQ_3_1,
  FAQ_3_2,
  FAQ_4,
  FAQ_5,
  FAQ_6_1,
  FAQ_6_2,
  FAQ_6_3,
  FAQ_7_1,
  FAQ_7_2,
  FAQ_7_3,
  FAQ_8,
} from "./constant";
import { SAnswerQuestion } from "./styled";

const { Panel } = Collapse;
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
              <Panel header="1. Flocks AI là gì?" key="1">
                <div>{FAQ_1}</div>
              </Panel>
              <Panel
                header="2. Flocks AI đang được bảo chứng bởi những tổ chức nào?"
                key="2"
              >
                <>
                  <div>{FAQ_2_1}</div>
                  <div>
                    - <span style={{ fontWeight: "bold" }}>Binance</span> -{" "}
                    {FAQ_2_2}
                  </div>
                  <div>
                    - <span style={{ fontWeight: "bold" }}>MoMo</span> -{" "}
                    {FAQ_2_3}
                  </div>
                  <div>
                    -{" "}
                    <span style={{ fontWeight: "bold" }}>
                      Trust Link Law Firm
                    </span>{" "}
                    - {FAQ_2_4}
                  </div>
                </>
              </Panel>
              <Panel
                header="3. Ai có thể trở thành nhà đầu tư trên Flock AI?"
                key="3"
              >
                <>
                  <div style={{ marginBottom: 12 }}>{FAQ_3_1}</div>
                  <div>{FAQ_3_2}</div>
                </>
              </Panel>
              <Panel
                header="4. Tôi có thể đầu tư bao nhiêu tiền trên Flocks AI?"
                key="4"
              >
                <div>{FAQ_4}</div>
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
              <Panel header="5. Tôi có thể đầu tư gì trên Flocks AI?" key="1">
                <div>{FAQ_5}</div>
              </Panel>
              <Panel
                header="6. Tại sao tôi phải xác minh danh tính của mình khi đăng kí đầu tư?"
                key="2"
              >
                <>
                  <div style={{ marginBottom: 12 }}>{FAQ_6_1}</div>
                  <div style={{ marginBottom: 12 }}>{FAQ_6_2}</div>
                  <div>{FAQ_6_3}</div>
                </>
              </Panel>
              <Panel
                header="7. Khi nào tôi sẽ nhận được chứng nhận mình đã đầu tư vào một doanh nghiệp và hình thức nhận như thế nào?"
                key="3"
              >
                <>
                  <div style={{ marginBottom: 12 }}>{FAQ_7_1}</div>
                  <div style={{ marginBottom: 12 }}>{FAQ_7_2}</div>
                  <div>{FAQ_7_3}</div>
                </>
              </Panel>
              <Panel
                header="8. Pháp nhân nào có thể đăng kí gọi vốn trên Flock AI?"
                key="4"
              >
                <div>{FAQ_8}</div>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </SAnswerQuestion>
    </>
  );
};

export default AnswerQuestion;
