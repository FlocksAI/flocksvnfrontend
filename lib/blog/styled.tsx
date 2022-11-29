import styled from "styled-components";

const SBlogIndex = styled.div`
  background-image: url("/image/home/bg-layout.png");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 60%;
  .search-box-input {
    width: 390px;
    height: 56px;
    border-radius: 12px;
  }
  .list-project {
    padding: 0px 212px;
  }
  .col-card {
    margin-bottom: 36px;
  }
  @media only screen and (max-width: 414px) {
    background-size: 70%;
    .list-project {
      padding: unset;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default SBlogIndex;
