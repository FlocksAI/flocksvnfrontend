import { useState } from "react";
import EventRepositorie from "../../repositories/event";

export default function useEvent() {
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [count, setCount] = useState();
  const [dataEvent, setDataEvent] = useState([]);
  const [dataDetail, setDataDetail] = useState() as any;

  const getListEvent = async () => {
    const formatParams = `expand=header_image,author,author.avatar&page=${page}&page_size=${pageSize}`;
    const resp = await EventRepositorie.getListEvent(formatParams);
    if (resp.status === 200) {
      setCount(resp.data.count);
      return setDataEvent(resp.data.results);
    }
  };
  return {
    dataEvent,
    getListEvent,
  };
}
