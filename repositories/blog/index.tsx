import HttpRequest from "../../config/http-request";
import { API } from "../../constant/api-constant";

class BlogRepositorie extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }

  getListBlog(param: any) {
    return this.get(`blog?${param}`);
  }

  getRelatedBlog(param: string, slug: string) {
    return this.get(`blog/${slug}/related?${param}`);
  }

  getDetailBlog(param: string, slug: string) {
    return this.get(`blog/${slug}?${param}`);
  }
}

export default new BlogRepositorie();
