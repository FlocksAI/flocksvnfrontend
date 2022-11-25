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

const SDetailProjectPage = styled.div`
  background: linear-gradient(
    270deg,
    rgba(199, 248, 51, 0.16) -3.31%,
    rgba(93, 223, 192, 0.16) 54.93%,
    rgba(0, 126, 173, 0.16) 129.8%
  );
  .head-top {
    padding: 36px 142px;
  }
  .logo-image {
    object-fit: cover;
  }
  .wrap-left-head {
    display: flex;
    align-items: center;
  }
  .btn {
    width: 12px;
    height: 40px;
    button {
      padding: 10px 24px;
      background: #ffffff;
      box-shadow: 0px 4px 32px rgba(53, 53, 53, 0.12);
      border-radius: 100px;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      border: none;
      width: 100%;
    }
  }
  .breadcrumb {
    padding: 36px 0px 46px 0px;
  }
`;

const SContentProjectHead = styled.div`
  .wrap-avatar-head {
    display: flex;
    align-items: center;
  }
  .content-name-project {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    .name-company {
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      color: #1e1e1e;
    }
  }
  .wrap-btn-head {
    display: flex;
    margin: 24px 0px;
    button {
      padding: 4px 12px;
      background: #f2fbf5;
      border-radius: 1000px;
      height: 28px;
      display: flex;
      align-items: center;
      margin-right: 16px;
      color: #20cf77;
      border: 1px solid #20cf77;
    }
  }
`;

export { SHeader, SDetailProjectPage, SContentProjectHead };
