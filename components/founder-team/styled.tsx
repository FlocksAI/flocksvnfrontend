import styled from "styled-components";

const SFounderTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 106px;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    .founder {
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: -0.02em;
      color: #1e1e1e;
      margin-bottom: 24px;
    }
    .content {
      width: 740px;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: #353535;
      margin-bottom: 42px;
    }
  }
  .team {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default SFounderTeam;
