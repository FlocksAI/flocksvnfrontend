export interface ICardField {
  title: string;
  content: string;
  subContent: string;
}

export interface IDataProject {
  id: string;
  companyName: string;
  abstract: string;
  collectedBudget: number;
  investmentTarget: number;
  numberInvestors: string | number;
  coverImage: TCoverImage;
}

type TCoverImage = {
  mediaType: string;
  url: string;
};

export interface ICardMember {
  name: string;
  position: string;
  linkedIn: string;
  facebook: string;
  twitter: string;
  imgSrc: string;
}

export interface ICardBlog {
  title: string;
  rawContent: string;
  date: string;
  slug?: string;
  author: TAuthor;
  headerImage: TCoverImage;
}

type TAuthor = {
  fullName: string;
  avatar: TCoverImage;
};
