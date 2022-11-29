import styled, { css } from "styled-components";

const SSignUp = styled("div")<{ isScroll: boolean }>`
  background: linear-gradient(270deg, #007ead 0%, #c7f833 100%, #5ddfc0 100%);
  padding-top: 36px;
  ${(props) =>
    props.isScroll
      ? css`
          overflow-y: unset;
          height: unset;
        `
      : css`
          overflow-y: hidden;
          height: 100vh;
        `}
`;
const SSignUpDetail = styled("div")<{ size: boolean }>`
  display: flex;
  justify-content: center;
  ${(props) =>
    props.size
      ? css`
          height: unset;
        `
      : css`
          height: 100vh;
        `}
  .wrap-sign-up {
    padding: 52px 0px 0px 118px;
    margin-top: 36px;
    border-radius: 64px 64px 0px 0px;
    background: #ffffff;
    width: 918px;
  }
  .rules .ant-checkbox-wrapper {
    margin-top: 12px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  .wrap-content {
    margin-bottom: 24px;
  }
  .welcome {
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
  .sign-up-email {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #7a7a7a;
  }
  .custom-sign-in-group {
    margin-bottom: 20px;
  }
  .custom-sign-in-item {
    height: 56px;
    .ant-input-affix-wrapper,
    input {
      height: 100%;
      border-radius: 12px;
    }
  }
  .title-content {
    margin-bottom: 32px;
  }
  .sign-up {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #1e1e1e;
  }
  .link-rule {
    color: #20cf77;
  }
  .ant-checkbox-inner {
    background-color: #f3fde2;
    border: none;
  }
  .ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: #20cf77 !important;
  }
  .wrap-btn-login {
    display: flex;
    margin-top: 36px;
    button {
      display: flex;
      justify-content: center;
      padding: 14px 24px;
      margin-right: 16px;
      border-radius: 1000px;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      border: none;
    }
    .sign-up {
      width: 212px;
      background: #1e1e1e;
      color: #ffffff;
    }
  }
  @media only screen and (max-width: 414px) {
    .wrap-sign-up {
      border-radius: 40px 40px 0px 0px;
      padding: 40px 24px 0px 24px;
      width: unset;
      width: 96%;
    }
    .wrap-btn-login {
      flex-direction: column;
      button {
        margin-bottom: 20px;
      }
      .sign-up {
        width: unset;
      }
    }
  }
`;
export { SSignUp, SSignUpDetail };
