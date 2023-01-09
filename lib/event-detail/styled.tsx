import styled from "styled-components";

const SContentHeadEventDetail = styled.div`
  margin-bottom: 48px;
  .avatar-blog {
    object-fit: none;
  }
  .wrap-avatar-name-blog {
    margin-top: 8px;
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
    }
  }
  .icon-info {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
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
  .content {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: #1e1e1e;
  }
  .name-time {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #7a7a7a;
    margin-left: 12px;
  }
  .wrap-icon {
    margin-top: 24px;
    display: flex;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media only screen and (max-width: 414px) {
    .avatar-blog {
      object-fit: contain;
      margin-right: 8px;
    }
    .wrap-icon {
      flex-direction: column;
      align-items: flex-start;
    }
    .icon-info {
      align-items: flex-start;
      margin-bottom: 16px;
    }
  }
`;

const SDetailEvent = styled.div`
  margin-top: 48px;
  .wrap-tab {
    margin-bottom: 32px;
  }
  .wrap-head {
    display: flex;
    flex-direction: column;
    margin: 32px 0px;
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
  .wrap-content-sub {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
  }
  .title-content-sub {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
  .content-sub {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  @media only screen and (max-width: 414px) {
    margin-top: 42px;
    .wrap-tab {
      img {
        width: 100%;
      }
    }
  }
`;

export { SContentHeadEventDetail, SDetailEvent };
