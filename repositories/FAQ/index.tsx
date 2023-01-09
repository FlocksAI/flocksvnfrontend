import HttpRequest from "../../config/http-request";
import { API } from "../../constant/api-constant";

class FAQRepositories extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }

  getListFAQ(param: any) {
    return this.get(`faq/category/${param}/questions`);
  }

  getListSearchFAQ(param: any) {
    return this.get(`faq/?search=${param}`);
  }
}

export default new FAQRepositories();
