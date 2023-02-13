import styled from "styled-components";

const SForInvestor = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .wrap-for-investor {
    text-align: center;
    box-shadow: 0px 4px 32px rgb(53 53 53 / 12%);
    padding: 16px 24px;
    border-radius: 16px;
  }
  .head-for-investor,
  .invest-easily,
  .build-diversify,
  .find-companies {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }
  .title-head {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
  }
  .title-for-investor {
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -0.02em;
    color: #353535;
  }
  .content {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #4e4e4e;
  }
  .btn-for-investor button {
    box-shadow: 0px 4px 32px rgb(53 53 53 / 12%);
    border-radius: 100px;
    height: 42px;
    padding: 0px 24px;
    font-size: 18px;
  }
`;

export { SForInvestor };
