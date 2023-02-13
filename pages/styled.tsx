import styled, { css } from "styled-components";

const SHomePage = styled("div")<{ isScroll: boolean }>`
  ${(props) =>
    props.isScroll
      ? css`
          overflow-y: unset;
          height: unset;
          padding: 36px 16px 96px 16px;
          background: #779aef;
        `
      : css`
          overflow-y: hidden;
          height: 100vh;
          padding: 36px 130px 96px 82px;
          background: #779aef;
        `}
`;

export default SHomePage;
