import styled from "styled-components";

const SHeadEvent = styled.div`
  margin-bottom: 48px;
  .title-upcoming-event {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #1e1e1e;
  }
  .content-upcoming-event {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #353535;
  }
  .mb-4 {
    margin-bottom: 24px;
  }
  .input-event {
    height: 56px;
    .ant-input-affix-wrapper {
      height: 100%;
      border-radius: 12px;
    }
  }
`;

const SEventContent = styled.div`
  margin: 32px 0px;
  .title-date {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.02em;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
  }
  .content {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }
`;

export { SHeadEvent, SEventContent };
