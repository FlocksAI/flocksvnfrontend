import styled from "styled-components";

const SModalSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .congratulations {
    margin: 0px 0px 0.35em;
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
    text-align: center;
    color: rgb(170, 198, 0);
    font-weight: 700;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .content {
    margin: 0px 0px 16px;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.00938em;
    line-height: 2;
    padding-left: 32px;
    padding-right: 32px;
    text-align: center;
    color: rgb(59, 78, 86);
  }
`;

export { SModalSuccess };
