import HttpRequest from "../../config/http-request";
import { API } from "../../constant/api-constant";

class EventRepositorie extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }

  getListEvent(param: any) {
    return this.get(`event?${param}`);
  }
}

export default new EventRepositorie();
