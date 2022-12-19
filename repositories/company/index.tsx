import HttpRequest, { RequestParams } from "../../config/http-request";
import { API } from "../../constant/api-constant";

class CompanyRepositories extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }

  getCategory() {
    return this.get("company/company/presentation/company_category/");
  }

  addInfoCompany(data: any) {
    return this.post(`company/add_more_info/`, data);
  }

  createProject(data: any) {
    return this.post(`company/company/presentation/create_presentation/`, data);
  }
}

export default new CompanyRepositories();
