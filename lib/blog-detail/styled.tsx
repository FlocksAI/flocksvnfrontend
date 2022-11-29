import styled from "styled-components";

const SContentHeadBlog = styled.div`
  margin-bottom: 48px;
  .avatar-blog {
    object-fit: none;
  }
  .wrap-avatar-name-blog {
    display: flex;
    align-items: center;
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
  }
  @media only screen and (max-width: 414px) {
    .avatar-blog {
      object-fit: contain;
      margin-right: 8px;
    }
  }
`;

const SDetailProject = styled.div`
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
  .wrap-artical {
    display: flex;
    flex-direction: column;
  }
  .wrap-tab-artical {
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid #eeeeee;
    padding: 24px;
  }
  .mb-2 {
    margin-bottom: 12px;
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

const SKeepRead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-keep-read {
    margin: 80px 0px 80px 0px;
    span {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #1e1e1e;
    }
  }
  .col-card {
    margin-bottom: 24px;
  }
`;

export { SContentHeadBlog, SDetailProject, SKeepRead };
