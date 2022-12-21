import styled, { css } from "styled-components";

const SVerify = styled("div")<{ isScroll: boolean }>`
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
const SVerifyDetail = styled("div")<{ size: boolean }>`
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
  .wrap-active {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: rgb(255, 255, 255);
    border-radius: 64px;
    margin-top: 42px;
    width: 350px;
    height: 250px;
  }
  .name-web {
    font-size: 24px;
    margin-bottom: 8px;
  }
  .active-email {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;
export { SVerify, SVerifyDetail };
