import React from "react";
import Footer from "../../components/footer";
import HeaderSub from "../../components/header/head-sub";
import HeadEventIndex from "./head";

const EventIndex = () => {
  return (
    <>
      <HeaderSub isShowHead={true}>
        <HeadEventIndex />
      </HeaderSub>
      <Footer />
    </>
  );
};

export default EventIndex;
