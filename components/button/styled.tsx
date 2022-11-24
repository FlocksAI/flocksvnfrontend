import styled from "styled-components";

const SButtonWitchBlog = styled.div`
  margin: 32px 0px;
  button {
    height: 50px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }
  .btn-main {
    background: linear-gradient(
      270deg,
      #c7f833 -3.31%,
      #5ddfc0 54.93%,
      #007ead 129.8%
    );
    border-radius: 1000px;
    color: #ffffff;
    padding: 12px 24px;
    z-index: 10;
    position: relative;
  }
  .btn-sub {
    color: #353535;
    padding: 12px 24px 12px 42px;
    border-radius: 0px 25px 25px 0px;
    margin-left: -18px;
    z-index: 1;
  }
  @media only screen and (max-width: 414px) {
    padding: 0px 16px;
  }
`;

export default SButtonWitchBlog;
