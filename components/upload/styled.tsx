import styled from "styled-components";

const SUpload = styled("div")<{ widthTrue?: boolean }>`
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input {
    display: inline-block;
    width: ${(props) => (props.widthTrue ? "100%" : "104px")};
    height: 104px;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px dashed #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    background-color: #fafafa;
    font-size: 10pt;
    margin-bottom: 16px;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
  input[type="file"] {
    display: none;
  }
`;

export { SUpload };
