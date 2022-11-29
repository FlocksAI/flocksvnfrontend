export interface ICardField {
  title: string;
  content: string;
  subContent: string;
}

export interface IDataProject {
  id: string;
  companyName: string;
  abstract: string;
  collectedBudget: string | number;
  investmentTarget: string | number;
  numberInvestors: string | number;
}
