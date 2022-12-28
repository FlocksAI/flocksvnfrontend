import React from "react";
import Footer from "../../components/footer";
import ContentProjectHead from "../../components/header/content-project-head";
import HeaderSub from "../../components/header/head-sub";
import BannerProjectDetail from "../../components/project-detail/banner-detail";
import useProjectDetail from "../../hook/project-detail/useProjectDetail";
import ContentProject from "./content";
import { SProjectDetail } from "./styled";
import TeamProject from "./team";

const ProjectDetailIndex = () => {
  const { dataProject } = useProjectDetail();
  console.log(dataProject);
  return (
    <>
      <SProjectDetail>
        <HeaderSub>
          <ContentProjectHead
            companyName={dataProject?.companyName}
            companySubTitle={dataProject?.companySubTitle}
            logoImage={dataProject?.logoImage}
            companyCategory={dataProject?.companyCategory}
          />
        </HeaderSub>
        <BannerProjectDetail
          collectedBudget={dataProject?.collectedBudget}
          numberInvestors={dataProject?.numberInvestors}
        />
        <ContentProject
          companyName={dataProject?.companyName}
          email={dataProject?.email}
          phoneNumber={dataProject?.phoneNumber}
          website={dataProject?.website}
          twitter={dataProject?.twitter}
          facebook={dataProject?.facebook}
          instagram={dataProject?.instagram}
          linkedin={dataProject?.linkedin}
          presentDetails={dataProject?.presentDetails}
          presentDocuments={dataProject?.presentDocuments}
        />
        <TeamProject
          companyPresentTeamMember={dataProject?.companyPresentTeamMember}
          companyName={dataProject?.companyName}
        />
        <Footer />
      </SProjectDetail>
    </>
  );
};

export default ProjectDetailIndex;
