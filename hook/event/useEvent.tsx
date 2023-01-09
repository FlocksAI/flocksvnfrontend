import { useState } from "react";
import EventRepositorie from "../../repositories/event";

export default function useEvent() {
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [count, setCount] = useState();
  const [dataEvent, setDataEvent] = useState([]);
  const [dataDetail, setDataDetail] = useState() as any;

  const getListEvent = async () => {
    try {
      const formatParams = `expand=header_image,author,author.avatar&page=${page}&page_size=${pageSize}`;
      const resp = await EventRepositorie.getListEvent(formatParams);
      if (resp.status === 200) {
        setCount(resp.data.count);
        return setDataEvent(resp.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEventDetail = async (param: any) => {
    try {
      const formatParams = `${param}?expand=header_image`;
      const resp = await EventRepositorie.getDetailEvent(formatParams);
      if (resp.status === 200) {
        setDataDetail(resp.data);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    count,
    dataEvent,
    dataDetail,
    getListEvent,
    getEventDetail,
    setPage,
  };
}
