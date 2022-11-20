import styled from "styled-components";

const SHeader = styled.div`
  .head-left {
    display: flex;
  }
  .logo-image {
    background: #fff;
    border-radius: 78px;
    padding: 4px 16px;
    margin-right: 48px;
  }
  .wrap-left-head {
    display: flex;
    align-items: center;
    .content {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #1e1e1e;
      margin-right: 28px;
    }
  }
  .wrap-login {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .wrap-right-head {
    display: flex;
  }
  .btn {
    display: flex;
    align-items: center;
    padding: 10px 24px;
    height: 40px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
  .btn-sign-up {
    background: none;
    border: none;
  }
  .btn-sign-in {
    border: none;
    border-radius: 46px;
  }
`;

export { SHeader };
