import HttpRequest from "../../config/http-request";
import { API } from "../../constant/api-constant";

class ProjectRepositories extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }
  getListProject() {
    return this.get(`company/company/presentation`);
  }
}

export default new ProjectRepositories();
