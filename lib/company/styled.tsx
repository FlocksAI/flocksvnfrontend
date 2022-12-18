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

const SForm = styled.div`
  .ant-input {
    height: 54px;
    border-radius: 10px;
  }
  .form-custom {
    margin-bottom: 24px;
  }
  .ant-form-item-label {
    label {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4375em;
      letter-spacing: 0.00938em;
    }
  }
  .head-title-step {
    margin: 24px 0px 12px 0px;
  }
  .ant-checkbox-wrapper {
    margin: 8px 0px;
    span {
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.00938em;
    }
    .ant-checkbox-inner {
      border: 1px solid #000;
    }
  }
  .radio-media {
    margin-bottom: 24px;
  }
  .ant-radio-wrapper {
    margin: 8px 0px;
    span {
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.00938em;
    }
    .ant-radio-inner {
      border: 1px solid #000;
    }
  }
  .title-step {
    font-size: 16px;
    margin-bottom: 0px;
    line-height: 2;
    color: rgb(59, 78, 86);
  }
  .mb-4 {
    margin-bottom: 20px;
  }
  .mb-2 {
    margin-bottom: 12px;
  }
  .back {
    margin-left: 12px;
  }
  .mr-2 {
    margin-right: 12px;
  }
`;

const SCreateProject = styled.div`
  .ant-upload {
    width: 100%;
  }
  .title-create-project {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: bold;
  }
  .sub-title {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export { SCompanyIndex, SForm, SCreateProject };
