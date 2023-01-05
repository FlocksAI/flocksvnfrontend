export interface IDetailBlogContent {
  content: string;
  headerImage: CoverImage;
}

export interface IContentHeader {
  tags: Array<string>;
  title: string;
  author: Author;
  modifiedAt: string;
}

type Author = {
  avatar: CoverImage;
  fullName: string;
};
type CoverImage = {
  mediaType: string;
  url: string;
};
