import HttpRequest from "../../config/http-request";
import { API } from "../../constant/api-constant";

class ProjectRepositories extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }
  getListProject(params: any) {
    return this.get(`company/company/presentation?${params}`);
  }

  getProjectDetail(id: any, params: string) {
    return this.get(`company/company/presentation/${id}${params}`);
  }
}

export default new ProjectRepositories();
