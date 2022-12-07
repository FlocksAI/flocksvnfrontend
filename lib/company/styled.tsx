import styled, { css } from "styled-components";

const SCompanyIndex = styled("div")<{ isScroll: boolean }>`
  /* background: linear-gradient(270deg, #007ead 0%, #c7f833 100%, #5ddfc0 100%); */
  box-shadow: -5px 6px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -5px 6px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -5px 6px 10px -7px rgba(0, 0, 0, 0.75);
  padding-top: 36px;
  margin-bottom: 60px;
  ${(props) =>
    props.isScroll
      ? css`
          overflow-y: unset;
          height: unset;
        `
      : css`
          overflow-y: hidden;
          /* height: 30vh; */
        `}
`;

export { SCompanyIndex };
