import styled from "styled-components";

const SFooter = styled.div`
  margin-top: 100px;
  padding: 36px 82px 76px 82px;
  .footer-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4px 4px 4px 20px;
    height: 48px;
    border: 1px solid #eeeeee;
    border-radius: 52px;
    width: 396px;
  }
  input {
    flex-grow: 2;
    border: none;
  }
  input:focus {
    outline: none;
  }
  .wrap-input {
    display: flex;
    justify-content: end;
    align-items: flex-end;
  }
  button {
    display: flex;
    align-items: center;
    background: #1e1e1e;
    border-radius: 49px;
    color: white;
    height: 40px;
    width: 108px;
    padding: 10px 24px;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
  }
  .footer-wrap {
    display: flex;
    flex-direction: column;
  }
  .wrap-icon {
    display: flex;
    justify-content: end;
    height: 100%;
    align-items: end;
    img {
      margin-right: 22px;
    }
  }
`;

export default SFooter;
