import styled from "styled-components";

const SPayment = styled.div`
  margin-top: 32px;
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
  .info-timeline {
    display: flex;
    flex-direction: column;
  }
  .wrap-head-document {
    padding: 24px;
    border: 1px solid #eeeeee;
    border-radius: 32px;
    margin-top: 16px;
  }
  .title-document {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #1e1e1e;
  }
  .started-day {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
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
  .mr-3 {
    margin-right: 16px;
  }
  .mb-3 {
    margin-bottom: 16px;
  }
  .header-investor {
    display: flex;
    flex-direction: column;
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
      color: #7a7a7a;
    }
  }
  .mb-6 {
    margin-bottom: 32px;
  }
  .mb-4 {
    margin-bottom: 24px;
  }
  .inp-value {
    input {
      height: 64px;
      border-radius: 12px;
    }
  }
  .btn-investor-now {
    width: 100%;
    button {
      width: 100%;
      height: 56px;
      background: #1e1e1e;
      box-shadow: 0px 4px 32px rgba(53, 53, 53, 0.12);
      border-radius: 72px;
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

export { SPayment };
