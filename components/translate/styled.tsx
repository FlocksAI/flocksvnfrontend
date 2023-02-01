import styled from "styled-components";

const SSwitchTranslate = styled.div`
  z-index: 99999999999;
  .custom-languge {
    display: flex;
    align-items: center;
    .anticon-down {
      color: #000000;
      margin-left: 8px;
    }
    img {
      width: 100%;
    }
  }
  .custom-dropdown .ant-dropdown-trigger {
    background-color: transparent;
    border: none;
  }
`;

export { SSwitchTranslate }

