import { Col, Collapse, Row } from "antd";
import Image from "next/image";
import React from "react";
import useTranslation from "../../hook/useTranslation";
import { SAnswerQuestion } from "./styled";

const { Panel } = Collapse;
const AnswerQuestion = () => {
  const { t } = useTranslation();
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
              <Panel header={t.what_flocks} key="1">
                <div>{t.description_what_flocks}</div>
              </Panel>
              <Panel header={t.how_does_flock_ai_secure} key="2">
                <div>{t.description_how_does_flock_ai_secure}</div>
              </Panel>
              <Panel header={t.flock_ai_is_being_guaranteed} key="3">
                <>
                  <div>{t.description_flock_ai_is_being_guaranteed_by}</div>
                  <div>
                    - <span style={{ fontWeight: "bold" }}>Binance</span> -{" "}
                    {t.description_flock_ai_is_being_guaranteed_by_binance}
                  </div>
                  <div>
                    - <span style={{ fontWeight: "bold" }}>MoMo</span> -{" "}
                    {t.description_flock_ai_is_being_guaranteed_by_momo}
                  </div>
                  <div>
                    -{" "}
                    <span style={{ fontWeight: "bold" }}>
                      Trust Link Law Firm
                    </span>{" "}
                    - {t.description_flock_ai_is_being_guaranteed_by_law_firm}
                  </div>
                </>
              </Panel>
              <Panel header={t.who_can_become_an_investor_on_Flocks_AI} key="4">
                <div style={{ marginBottom: 12 }}>
                  {t.description_who_can_become_an_investor_on_Flocks_AI_1}
                </div>
                <div>
                  {t.description_who_can_become_an_investor_on_Flocks_AI_2}
                </div>
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
              <Panel
                header={t.how_much_money_can_I_invest_on_Flocks_AI}
                key="1"
              >
                <div>
                  {t.description_how_much_money_can_I_invest_on_Flocks_AI}
                </div>
              </Panel>
              <Panel header={t.what_can_I_invest_on_Flocks_AI} key="2">
                <>
                  <div style={{ marginBottom: 12 }}>
                    {t.description_what_can_I_invest_on_Flocks_AI_1}
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    {t.description_what_can_I_invest_on_Flocks_AI_2}
                  </div>
                </>
              </Panel>
              <Panel header={t.how_can_I_invest_on_Flocks_AI} key="3">
                <>
                  <div style={{ marginBottom: 12 }}>
                    {t.description_how_can_I_invest_on_Flocks_AI_become}
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    {t.description_how_can_I_invest_on_Flocks_AI_1}
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    {t.description_how_can_I_invest_on_Flocks_AI_2}
                  </div>
                  <div>{t.description_how_can_I_invest_on_Flocks_AI_3}</div>
                </>
              </Panel>
              <Panel
                header={
                  t.why_do_I_have_to_verify_my_identity_when_I_register_to_invest
                }
                key="4"
              >
                <div>
                  {
                    t.description_why_do_I_have_to_verify_my_identity_when_I_register_to_invest
                  }
                </div>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </SAnswerQuestion>
    </>
  );
};

export default AnswerQuestion;
