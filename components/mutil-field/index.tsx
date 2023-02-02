import React from "react";
import { SMutilField } from "./styled";
import { Row, Col } from "antd";
import CardField from "../card/Card-Field";
import useWindowResize from "../../hook/useResize";
import useTranslation from "../../hook/useTranslation";
import { useRouter } from "next/router";

const MutilField = () => {
  const { t } = useTranslation();
  const size = useWindowResize();
  const router = useRouter();
  return (
    <>
      <SMutilField>
        <div className="wrap-head">
          <Row justify="space-evenly">
            <Col span={24} className="head-mutil-field">
              {size.width > 414 ? (
                <>
                  <div className="head-title">
                    <span className="first">{t.many_fields}</span>
                  </div>
                  <div className="head-title second">
                    <span className="content">{t.Flocks_AI}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="mobile-head-title">
                    <span className="first">{t.many_fields} </span>
                    <br />
                    <span className="second">{t.Flocks_AI}</span>
                  </div>
                </>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={24} xl={8}>
              <div className="wrap-field">
                <span className="head-field">
                  {t.Flocks_AI_brings}
                </span>
                <div className="type-field">
                  <span className="br-radius">{t.technology}</span>
                  <span className="br-radius">{t.entertainment}</span>
                  <span className="br-radius">{t.restaurant_and_hotel}</span>
                  <span className="br-radius">{t.health_and_beauty}</span>
                  <span className="br-radius">{t.fashion}</span>
                  <span>{t.realty}</span>
                </div>
              </div>
            </Col>
            <Col span={4} />
            <Col xs={24} xl={12}>
              <Row>
                <Col xs={24} xl={10}>
                  <CardField
                    title={t.start_up}
                    content={t.creating_unique_ideas}
                    subContent={t.finished_products}
                  />
                </Col>
                <Col span={2} />
                <Col xs={24} xl={10}>
                  <CardField
                    title={t.SME}
                    content={t.the_products_appeared_on_the_market}
                    subContent={t.has_revenue_and_profit_report}
                  />
                </Col>
                <Col span={2} />
                <Col xs={24} xl={10}>
                  <CardField
                    title={t.web3}
                    content={t.website_technology_product_ideas}
                    subContent={t.based_on_blockchain_platform}
                  />
                </Col>
                <Col span={2} />
                <Col xs={24} xl={10}>
                  <CardField
                    title={t.special_projects}
                    content={t.creating_unique_ideas}
                    subContent={t.finished_products}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={24} xl={24} className="mobile-field">
            <div className="sub-title title">
              {router.locale === "vi" ? (
                <>
                  <span className="content">Flocks AI </span>{" "}
                  <span> hoạt động như thế nào?</span>
                </>
              ) : (
                <>
                  <span>How </span> &nbsp;
                  <span className="content"> Flocks AI </span>{" "}
                  <span>works</span>
                </>
              )}
            </div>
          </Col>
        </Row>
        <Row justify="center" className="wrap-content">
          <Col xs={22} xl={6} className="wrap-sub">
            <div className="content-number">
              <span>01</span>
            </div>
            <div className="content-head">
              <span>{t.register_for_funding}</span>
            </div>
            <div className="content-sub">
              <span className="first">
                {t.business_submits}
              </span>
              <span>
                {t.provide_related_documents}
              </span>
            </div>
          </Col>
          <Col xs={22} xl={6} className="wrap-sub">
            <div className="content-number">
              <span>02</span>
            </div>
            <div className="content-head">
              <span>{t.flie_appraisal}</span>
            </div>
            <div className="content-sub">
              <span className="first">
                {t.expert_team}
              </span>
              <span>
                {t.our_team_will_contact}
              </span>
            </div>
          </Col>
          <Col xs={22} xl={6} className="wrap-sub">
            <div className="content-number">
              <span>03</span>
            </div>
            <div className="content-head">
              <span>{t.open_fundraising_campaign_on_Flock_AI}</span>
            </div>
            <div className="content-sub">
              <span className="first">
                {t.when_business_passes}
              </span>
              <span>
                {t.Flock_AI_will_help_business}
              </span>
            </div>
          </Col>
        </Row>
      </SMutilField>
    </>
  );
};

export default MutilField;
