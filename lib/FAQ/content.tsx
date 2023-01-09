import { Col, Collapse, Row, Spin } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { IFAQContent } from "./interface";
import { SContentFAQ } from "./styled";

const { Panel } = Collapse;
const ContentFAQ: React.FC<IFAQContent> = ({ dataList, search }) => {
  const [listId] = useState([
    "General Information",
    "For Investor",
    "For Companies",
    "About Flocks",
    "Orther Questions",
  ]);
  if (dataList.length === 0)
    return (
      <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
        <Spin size="large" />
      </div>
    );
  return (
    <>
      <SContentFAQ>
        <Row justify="center">
          <Col xs={22} xl={10}>
            {search.length > 0
              ? dataList.map((dataSearch) => {
                  return (
                    <>
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
                        <Panel header={dataSearch?.title} key={dataSearch?.id}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: dataSearch?.rawContent,
                            }}
                          />
                        </Panel>
                      </Collapse>
                    </>
                  );
                })
              : listId.map((el, index) => {
                  return (
                    <>
                      <div className="title-faq">{el}</div>
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
                        {dataList
                          .filter((w) => w.category === index + 1)
                          .map((els, key) => {
                            return (
                              <Panel
                                header={`${key + 1}. ${els?.title}`}
                                key={els?.id}
                              >
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: els?.rawContent,
                                  }}
                                />
                              </Panel>
                            );
                          })}
                      </Collapse>
                    </>
                  );
                })}
          </Col>
          <Col xl={4} />
          <Col xl={4} />
        </Row>
      </SContentFAQ>
    </>
  );
};

export default ContentFAQ;
