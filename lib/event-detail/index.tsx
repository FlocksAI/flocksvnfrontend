import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../../components/footer";
import HeaderSub from "../../components/header/head-sub";
import useEvent from "../../hook/event/useEvent";
import ContentHeadEventDetail from "./content-head";
import DetailEvent from "./detail";

const EventDetailIndex = () => {
  const router = useRouter();
  const { dataDetail, getEventDetail } = useEvent();
  useEffect(() => {
    if (router?.query?.id) {
      getEventDetail(router.query?.id);
    }
  }, [router?.query?.id]);
  return (
    <>
      <HeaderSub>
        <ContentHeadEventDetail
          headerImage={dataDetail?.headerImage}
          location={dataDetail?.location}
          title={dataDetail?.title}
          executionDateStart={dataDetail?.executionDateStart}
          executionDateEnd={dataDetail?.executionDateEnd}
        />
      </HeaderSub>
      <DetailEvent rawContent={dataDetail?.rawContent} />
      <Footer />
    </>
  );
};

export default EventDetailIndex;
