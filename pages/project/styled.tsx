import styled from "styled-components";

const SProject = styled.div`
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
    .list-project {
      padding: unset;
      display: flex;
      flex-direction: column;
    }
    .col-mobile-search {
      display: flex;
      justify-content: center;
    }
  }
`;

export default SProject;
