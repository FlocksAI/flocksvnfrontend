import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import HeaderSub from "../../components/header/head-sub";
import useFAQ from "../../hook/FAQ/useFAQ";
import ContentFAQ from "./content";
import HeadFAQIndex from "./head";

const FAQIndex = () => {
  const [search, setSearch] = useState<string>("");
  const { dataList, getListFAQ, getSearchFAQ, setDataList } = useFAQ();
  useEffect(() => {
    if (search.length === 0) {
      getListFAQ();
    }
  }, [search]);
  useEffect(() => {
    if (search.length > 0) {
      setTimeout(() => {
        getSearchFAQ(search);
      }, 1000);
    }
  }, [search]);
  const handSearch = (data: any) => {
    setDataList([]);
    setSearch(data.target.value);
  };
  return (
    <>
      <HeaderSub isShowHead={true}>
        <HeadFAQIndex handSearch={handSearch} />
      </HeaderSub>
      <ContentFAQ dataList={dataList} search={search} />
      <Footer />
    </>
  );
};

export default FAQIndex;
