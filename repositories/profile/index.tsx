import HttpRequest, { RequestParams } from "../../config/http-request";
import { API } from "../../constant/api-constant";

class ProfileRepositories extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }

  getProfileMe() {
    return this.get("auth/profile/me/?expand=avatar,cover_photo/");
  }
}

export default new ProfileRepositories();
