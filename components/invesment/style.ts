import styled from "styled-components";

const SInvesment = styled.div`
  padding: 136px 160px 60px 200px;
  .wrap {
    margin-bottom: 64px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 305px;
    height: 56px;
    background: #1e1e1e;
    box-shadow: 0px 4px 32px rgba(53, 53, 53, 0.12);
    border-radius: 1000px;
    button {
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      background: transparent;
      border: none;
    }
  }
  .image-banner {
    width: 100%;
  }
  .img-consul {
    display: flex;
    justify-content: end;
  }
  .wrap-btn {
    display: flex;
    justify-content: end;
  }
  .common {
    font-weight: 700;
    font-size: 64px;
    line-height: 76px;
    letter-spacing: -0.03em;
  }
  .one-platform {
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
  .wrap-item .content {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
  .title-tech {
    margin-top: 128px;
    .head {
      text-align: right;
      font-weight: 700;
      font-size: 64px;
      line-height: 76px;
      margin-bottom: 16px;
      .tech {
        background: linear-gradient(
          270deg,
          #c7f833 -3.31%,
          #5ddfc0 54.93%,
          #007ead 129.8%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .content {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      text-align: right;
      color: #353535;
      margin-bottom: 32px;
    }
  }
  @media only screen and (max-width: 414px) {
    padding: 60px 16px 80px 16px;
    .common {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.02em;
    }
    .one-platform {
      margin-bottom: 16px;
    }
    .title-tech {
      margin-top: 80px;
      .head {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        text-align: right;
        letter-spacing: -0.02em;
      }
    }
    .img-consul {
      display: flex;
      justify-content: center;
    }
    .wrap-btn {
      display: flex;
      justify-content: center;
      margin-top: 42px;
    }
  }
`;

export { SInvesment };
