import styled from "styled-components";

const SBanner = styled.div`
  .title-banner {
    margin-top: 108px;
  }
  .wrap-banner {
    .title {
      font-weight: 700;
      font-size: 72px;
      line-height: 86px;
      letter-spacing: -0.03em;
      text-transform: capitalize;
    }
    .content {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #1e1e1e;
      margin-top: 16px;
      .choose {
        font-weight: bold;
      }
    }
    .btn {
      margin-top: 48px;
      display: flex;
    }
    button {
      padding: 12px 24px;
    }
    .project {
      background: #1e1e1e;
      box-shadow: 0px 4px 32px rgba(53, 53, 53, 0.12);
      border-radius: 100px;
      color: #fff;
      margin-right: 24px;
    }
    .call-investor {
      background: #ffffff;
      border: 1px solid #ffffff;
      box-shadow: 0px 4px 32px rgba(53, 53, 53, 0.12);
      border-radius: 100px;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
    }
  }
  .image-banner {
    width: 100%;
    > div {
      position: unset !important;
    }
    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }
  .title-head-bottom {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #1e1e1e;
    margin-bottom: 16px;
  }
  .wrap-image {
    display: flex;
    .img-content {
      margin-right: 32px;
    }
  }
  .vietnam {
    color: #fff;
  }
`;

export { SBanner };
