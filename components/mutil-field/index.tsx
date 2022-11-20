import React from "react";
import { SMutilField } from "./styled";
import { Row, Col } from "antd";
import CardField from "../card/Card-Field";

const MutilField = () => {
  return (
    <>
      <SMutilField>
        <div className="wrap-head">
          <Row justify="space-evenly">
            <Col span={24}>
              <div className="head-title">
                <span className="first">Gọi vốn Đa lĩnh vực</span>
              </div>
              <div className="head-title second">
                <span className="content">Flocks AI </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
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
            <Col span={12}>
              <Row>
                <Col span={10}>
                  <CardField
                    title="Start-up"
                    content="Hình thành ý tưởng độc đáo"
                    subContent="Đã hoàn thành sản phẩm"
                  />
                </Col>
                <Col span={2} />
                <Col span={10}>
                  <CardField
                    title="SME"
                    content="Sản phẩm đã xuất hiện trên thị trường"
                    subContent="Có báo cáo doanh thu và lợi nhuận"
                  />
                </Col>
                <Col span={2} />
                <Col span={10}>
                  <CardField
                    title="Web 3"
                    content="Ý tưởng sản phẩm công "
                    subContent="nghệ website dựa trên nền tảng blockchain"
                  />
                </Col>
                <Col span={2} />
                <Col span={10}>
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
        <div className="sub-title title">
          <span className="content">Flocks AI </span>{" "}
          <span> hoạt động như thế nào?</span>
        </div>
        <Row justify="center" className="wrap-content">
          <Col span={6} className="wrap-sub">
            <div className="content-number">
              <span>01</span>
            </div>
            <div className="content-head">
              <span>Đăng kí gọi vốn</span>
            </div>
            <div className="content-sub">
              <span className="first">
                Doanh nghiệp nộp hồ sơ đăng ký trên trang thông tin của Flock AI
              </span>
              <span>
                Cung cấp các tài liệu (nếu cần) để Flocks AI thẩm định doanh
                nghiệp.
              </span>
            </div>
          </Col>
          <Col span={6} className="wrap-sub">
            <div className="content-number">
              <span>02</span>
            </div>
            <div className="content-head">
              <span>Thẩm định hồ sơ</span>
            </div>
            <div className="content-sub">
              <span className="first">
                Đội ngũ chuyên gia của Flock AI sẽ giúp doanh nghiệp thẩm định:
                pháp lý, định giá,...
              </span>
              <span>
                Đội ngũ Flocks AI sẽ liên hệ doanh nghiệp để xác nhận thông tin,
                tư vấn pháp lý và chiến lược gọi vốn phù hợp (nếu có)
              </span>
            </div>
          </Col>
          <Col span={6} className="wrap-sub">
            <div className="content-number">
              <span>03</span>
            </div>
            <div className="content-head">
              <span>Mở chiến dịch gọi vốn trên Flocks AI</span>
            </div>
            <div className="content-sub">
              <span className="first">
                Khi vượt qua vòng thẩm định, thông tin doanh nghiệp sẽ được công
                khai trên nền tảng Flocks AI.
              </span>
              <span>
                Flocks AI sẽ giúp doanh nghiệp kết nối hiệu quả với các tổ chức,
                cá nhân có mong muốn đầu tư vào dự án, đảm bảo quá trình giải
                ngân diễn ra suôn sẻ và thông đúng quy định.
              </span>
            </div>
          </Col>
        </Row>
      </SMutilField>
    </>
  );
};

export default MutilField;
