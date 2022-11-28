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
    color: #20cf77;
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
  @media only screen and (max-width: 414px) {
    .wrap-tab {
      img {
        width: 100%;
      }
    }
  }
`;

export { SProjectDetail, SContentProject };
