import React from "react";
import { SMutilField } from "./styled";
import { Row, Col } from "antd";
import CardField from "../card/Card-Field";
import useWindowResize from "../../hook/useResize";
import useTranslation from "../../hook/useTranslation";
import { useRouter } from "next/router";
import ForInvestor from "../for-investor";

const MutilField = () => {
  const { t } = useTranslation();
  const size = useWindowResize();
  const router = useRouter();
  return (
    <>
      <SMutilField>
        <div className="wrap-head">
          <Row justify="center">
            <Col span={24} className="head-mutil-field">
              {size.width > 414 ? (
                <>
                  <div className="head-title">
                    <span className="first">{t.many_fields}</span>
                  </div>
                  <div className="head-title second">
                    <span>{t.on}</span>{" "}
                    <span className="content">{t.Flocks_AI}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="mobile-head-title">
                    <span className="first">{t.many_fields} </span>
                    <br />
                    <span>{t.on}</span>
                    <span className="second">{t.Flocks_AI}</span>
                  </div>
                </>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={24} xl={24}>
              <div className="wrap-field">
                <span className="head-field">{t.Flocks_AI_brings}</span>
                <div className="type-field">
                  <span className="br-radius">{t.technology}</span>
                  <span className="br-radius">{t.entertainment}</span>
                  <span className="br-radius">{t.restaurant_and_hotel}</span>
                  <span className="br-radius">{t.health_and_beauty}</span>
                  <span className="br-radius">{t.fashion}</span>
                  <span className="br-radius color-private">
                    {t.web3_companies}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ForInvestor />
        {/* <Row>
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
              <span className="first">{t.business_submits}</span>
              <span>{t.provide_related_documents}</span>
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
              <span className="first">{t.expert_team}</span>
              <span>{t.our_team_will_contact}</span>
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
              <span className="first">{t.when_business_passes}</span>
              <span>{t.Flock_AI_will_help_business}</span>
            </div>
          </Col>
        </Row> */}
      </SMutilField>
    </>
  );
};

export default MutilField;
