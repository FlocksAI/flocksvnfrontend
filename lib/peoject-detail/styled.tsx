import styled from "styled-components";

const SProjectDetail = styled.div`
  .wrap-team {
    width: 100%;
    margin-top: 80px;
  }
  .title-team {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name-team {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #1e1e1e;
  }
  .description {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #353535;
  }
  .title-team-away {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    .name {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: #353535;
    }
  }
  .wrap-avatar-team {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
  .wrap-tab {
    margin-bottom: 32px;
  }
  .wrap-head {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    .title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #1e1e1e;
    }
    .content {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #353535;
    }
  }
  .ant-tabs-tab {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #20cf77;
  }
  .ant-tabs-ink-bar {
    border-bottom: 1px solid #20cf77 !important;
    background: #20cf77;
  }
  .wrap-about-document {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .wrap-document {
    display: flex;
    flex-direction: column;
  }
  .wrap-head-document {
    padding: 24px;
    border: 1px solid #eeeeee;
    border-radius: 32px;
  }
  .title-document {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #1e1e1e;
  }
  .about-company {
    margin-bottom: 16px;
  }
  .common-title-document {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #7a7a7a;
  }
  .common-content-document {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #1e1e1e;
  }
  .mb-3 {
    margin-bottom: 16px;
  }
  .mb-2 {
    margin-bottom: 12px;
  }
  .wrap-icon-document {
    display: flex;
    justify-content: space-between;
  }
`;

const SContentProject = styled.div`
  margin-top: 120px;
  @media only screen and (max-width: 414px) {
    margin-top: 42px;
    .wrap-tab {
      img {
        width: 100%;
      }
    }
  }
`;

const SBannerProject = styled.div`
  margin-top: 60px;
  .img-slider {
    width: 682px;
  }
  .slick-dots {
    display: flex !important;
    img {
      width: 176px;
      height: 94px;
    }
  }
  .slick-dots {
    position: unset;
    li {
      width: 176px;
    }
  }
  .wrap-info-day {
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #eeeeee;
    border-radius: 32px;
  }
  .timeline {
    display: flex;
    justify-content: space-between;
  }
  .started-day {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }
  .total-value {
    background: linear-gradient(
      263.1deg,
      #c7f833 -121.94%,
      #5ddfc0 -11.14%,
      #007ead 131.32%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }
  .ant-progress-text {
    display: none;
  }
  .ant-progress-outer {
    width: 100%;
  }
  .info-timeline {
    display: flex;
    flex-direction: column;
  }
  .value-investor {
    font-size: 32px;
  }
  .common-investor {
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -0.02em;
    color: #353535;
  }
  .content-value-investor {
    font-size: 16px;
  }
  .slick-arrow,
  .slick-prev,
  .slick-next {
    display: none !important;
  }
  .btn-investor-now button {
    width: 100%;
    height: 50px;
    background: #1e1e1e;
    box-shadow: 0px 4px 32px rgba(53, 53, 53, 0.12);
    border-radius: 100px;
    color: #ffffff;
  }
  @media only screen and (max-width: 414px) {
    .img-slider {
      width: 100%;
    }
    .slick-dots {
      height: 68px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .mobile-active {
      margin-top: 40px;
    }
  }
`;

export { SProjectDetail, SContentProject, SBannerProject };
