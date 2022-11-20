import styled from "styled-components";

const SAnswerQuestion = styled.div`
  margin-top: 106px;
  .title {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
  }
  .answer {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #1e1e1e;
    margin-bottom: 24px;
  }
  .content {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #353535;
  }
  .ant-collapse-header-text {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #353535;
  }
  .ant-collapse-content-box p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #353535;
  }
  .ant-collapse-item {
    background: #ffffff;
    border: 1.5px solid #ffffff;
    box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
    margin-bottom: 24px;
  }
`;

export { SAnswerQuestion };
