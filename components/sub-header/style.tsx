import styled from "styled-components";

const SSubHead = styled.div`
  padding: 36px 142px;
  .logo-image {
    object-fit: cover;
  }
  .wrap-left-head {
    display: flex;
    align-items: center;
  }
  .content span {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
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
  .banner-wrap {
    display: flex;
    flex-direction: column;
    padding-top: 88px;
    .title {
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      padding-bottom: 32px;
    }
    .content {
      width: 60%;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }
  }
  @media only screen and (max-width: 414px) {
    padding: 16px;
    .banner-wrap {
      padding-top: 42px;
      .content {
        width: 100%;
      }
    }
    .image-banner {
      width: 100%;
      height: auto;
    }
  }
`;

export default SSubHead;
