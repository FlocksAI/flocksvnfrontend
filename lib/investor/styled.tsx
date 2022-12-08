import styled from "styled-components";

const SIntroduction = styled.div`
  margin-top: 60px;
  .wrap-accept {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #000;
    margin-bottom: 24px;
  }
  .title {
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.167;
    text-align: center;
    color: rgb(59, 78, 86);
    margin-bottom: 40px;
  }
  .sub-title,
  .content {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    color: rgb(59, 78, 86);
    margin-bottom: 16px;
  }
  .content {
    font-size: 1rem;
  }
  .check-approve {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.334;
    color: rgb(59, 78, 86);
    margin-bottom: 24px;
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    button {
      width: 66.67%;
    }
  }
`;

export { SIntroduction };
