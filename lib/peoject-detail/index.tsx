import React from "react";
import Footer from "../../components/footer";
import HeaderSub from "../../components/header/head-sub";
import BannerProjectDetail from "../../components/project-detail/banner-detail";
import ContentProject from "./content";
import { SProjectDetail } from "./styled";
import TeamProject from "./team";

const ProjectDetailIndex = () => {
  return (
    <>
      <SProjectDetail>
        <HeaderSub />
        <BannerProjectDetail />
        <ContentProject />
        <TeamProject />
        <Footer />
      </SProjectDetail>
    </>
  );
};

export default ProjectDetailIndex;
