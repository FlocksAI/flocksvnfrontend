import styled from "styled-components";

const SNavigation = styled.div`
  .nav {
    height: 40px;
    width: 100%;
    position: relative;
  }

  .nav > .nav-header {
    display: inline;
  }

  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 10px 10px 10px 10px;
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
  }

  .nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
  }

  .nav > .nav-links > a:hover {
    background-color: #dbe6e4;
    border-radius: 50%;
  }

  .nav > #nav-check {
    display: none;
  }

  @media only screen and (max-width: 414px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 40px;
      height: 40px;
      padding: 11px 9px 9px 8px;
      background-color: #dbe6e4;
      border-radius: 50%;
    }
    .nav > .nav-btn > label:hover,
    .nav #nav-check:checked ~ .nav-btn > label {
      background-color: #dbe6e4;
      border-radius: 50%;
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 8px;
      border-top: 2px solid #1e1e1e;
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #dbe6e4;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
      z-index: 99;
    }
    .nav > .nav-links > span {
      display: block;
      width: 100%;
      padding: 16px;
      font-weight: 600;
      font-size: 16px;
      color: rgb(30, 30, 30);
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
      height: calc(40vh - 50px);
      overflow-y: auto;
    }
  }
`;

export default SNavigation;
