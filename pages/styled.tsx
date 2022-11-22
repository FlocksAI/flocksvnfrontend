import styled, { css } from "styled-components";

const SHomePage = styled("div")<{ isScroll: boolean }>`
  ${(props) =>
    props.isScroll
      ? css`
          overflow-y: unset;
          height: unset;
          padding: 36px 16px 96px 16px;
          background: -webkit-linear-gradient(
            270deg,
            #007ead 0%,
            #c7f833 100%,
            #5ddfc0 100%
          );
        `
      : css`
          overflow-y: hidden;
          height: 100vh;
          padding: 36px 130px 96px 82px;
          background: linear-gradient(
            270deg,
            #007ead 0%,
            #c7f833 100%,
            #5ddfc0 100%
          );
        `}
`;

export default SHomePage;
