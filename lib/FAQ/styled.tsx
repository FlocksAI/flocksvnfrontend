import styled from "styled-components";

const SHeadFAQ = styled.div`
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

const SContentFAQ = styled.div`
  margin-top: 24px;
  .title-faq {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
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
  .ant-collapse-header-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
`;
export { SHeadFAQ, SContentFAQ };
