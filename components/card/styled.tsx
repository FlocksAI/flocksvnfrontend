import styled from "styled-components";

const SCard = styled.div`
  width: 506px;
  border: 1px solid #eeeeee;
  border-radius: 32px;
  .wrap-head-card {
    padding: 12px 12px 0px 12px;
    border-radius: 24px;
  }
  .wrap-price {
    padding: 12px 12px 28px 12px;
  }
  .wrap-btn {
    button {
      background: #eeeeee;
      border-radius: 8px;
      padding: 10px 16px;
      border: none;
      margin-right: 16px;
    }
  }
  .wrap-content {
    margin-top: 68px;
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
  .wrap-btn {
    margin-top: 24px;
  }
  .parent-image {
    position: relative;
    top: 0;
    left: 0;
  }
  .main-image {
    position: relative;
    top: 0;
    left: 0;
    border-radius: 24px;
    width: 100%;
  }
  .sub-image {
    position: absolute;
    top: 70%;
    left: 16px;
  }
  .command-price {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
  }
  .first-price {
    color: #1e1e1e;
  }
  .second-price {
    color: #c0c0c0;
  }
  .item-investor {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #1e1e1e;
  }
  .present {
    margin-right: 24px;
  }
  .progress {
    .ant-progress-text {
      display: none;
    }
  }
  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`;

const SCardField = styled.div`
  padding: 34px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 32px;
  margin-bottom: 12px;
  .circle {
    width: 80px;
    height: 80px;
    background: linear-gradient(
      236.86deg,
      #c7f833 -99.48%,
      #5ddfc0 16.16%,
      #007ead 164.84%
    );
    border-radius: 50%;
  }
  .wrap-content-field {
    display: flex;
    flex-direction: column;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .title-field {
    font-weight: 700;
    font-size: 24px;
    padding: 24px 0px 8px 0px;
    letter-spacing: -0.02em;
    background: linear-gradient(
      270deg,
      #c7f833 -3.31%,
      #5ddfc0 54.93%,
      #007ead 129.8%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export { SCardField };
export default SCard;
