import React from "react";
import { SMutilField } from "./styled";
import { Row, Col } from "antd";
import CardField from "../card/Card-Field";
import useWindowResize from "../../hook/useResize";
import useTranslation from "../../hook/useTranslation";

const MutilField = () => {
  const { t } = useTranslation();
  const size = useWindowResize();
  return (
    <>
      <SMutilField>
        <div className="wrap-head">
          <Row justify="space-evenly">
            <Col span={24} className="head-mutil-field">
              {size.width > 414 ? (
                <>
                  <div className="head-title">
                    <span className="first">Gọi vốn Đa lĩnh vực</span>
                  </div>
                  <div className="head-title second">
                    <span className="content">Flocks AI </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="mobile-head-title">
                    <span className="first">Gọi vốn Đa lĩnh vực </span>
                    <br />
                    <span className="second">Flocks AI </span>
                  </div>
                </>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={24} xl={8}>
              <div className="wrap-field">
                <span className="head-field">
                  Flocks AI mang đến cho mọi người quyền tham gia đầu tư vào các
                  doanh nghiệp ở giai đoạn khởi nghiệp với nhiều hình thức đa
                  dạng.
                </span>
                <div className="type-field">
                  <span className="br-radius">Công nghệ</span>
                  <span className="br-radius">Giải Trí</span>
                  <span className="br-radius">Nhà hàng & khách sạn</span>
                  <span className="br-radius">Chăm sóc sức khoẻ & sắc đẹp</span>
                  <span className="br-radius">Thời trang</span>
                  <span>Bất Động Sản</span>
                </div>
              </div>
            </Col>
            <Col span={4} />
            <Col xs={24} xl={12}>
              <Row>
                <Col xs={24} xl={10}>
                  <CardField
                    title="Start-up"
                    content="Hình thành ý tưởng độc đáo"
                    subContent="Đã hoàn thành sản phẩm"
                  />
                </Col>
                <Col span={2} />
                <Col xs={24} xl={10}>
                  <CardField
                    title="SME"
                    content="Sản phẩm đã xuất hiện trên thị trường"
                    subContent="Có báo cáo doanh thu và lợi nhuận"
                  />
                </Col>
                <Col span={2} />
                <Col xs={24} xl={10}>
                  <CardField
                    title="Web 3"
                    content="Ý tưởng sản phẩm công "
                    subContent="nghệ website dựa trên nền tảng blockchain"
                  />
                </Col>
                <Col span={2} />
                <Col xs={24} xl={10}>
                  <CardField
                    title="Dự Án - Đặc Biệt"
                    content="Hình thành ý tưởng độc đáo"
                    subContent="Đã hoàn thành sản phẩm"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={24} xl={24} className="mobile-field">
            <div className="sub-title title">
              <span className="content">Flocks AI </span>{" "}
              <span> hoạt động như thế nào?</span>
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
