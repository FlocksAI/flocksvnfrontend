import HttpRequest, { RequestParams } from "../../config/http-request";
import { API } from "../../constant/api-constant";

class CompanyRepositories extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }

  addInfoCompany(data: any) {
    return this.post(`company/add_more_info/`, data);
  }
}

export default new CompanyRepositories();
