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
