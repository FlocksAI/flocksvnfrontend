import { useState } from "react";
import FAQRepositories from "../../repositories/FAQ";

export default function useFAQ() {
  const [listId] = useState([1, 2, 3, 4, 5]);
  const [dataList, setDataList] = useState([]);
  const getListFAQ = async () => {
    try {
      const data: any[] = [];
      await Promise.all(
        listId.map(async (id) => {
          const res = await FAQRepositories.getListFAQ(id);
          if (res.status === 200) {
            data.push(...res.data?.results);
          }
        })
      );
      setDataList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchFAQ = async (params: string) => {
    try {
      const resp = await FAQRepositories.getListSearchFAQ(params);
      if (resp.status === 200) {
        setDataList(resp.data?.results);
        return;
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return { dataList, getListFAQ, getSearchFAQ, setDataList };
}
