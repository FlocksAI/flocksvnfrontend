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
