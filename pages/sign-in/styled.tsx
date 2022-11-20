import styled, { css } from "styled-components";

const SSignInPage = styled("div")<{ isScroll: boolean }>`
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

export default SSignInPage;
