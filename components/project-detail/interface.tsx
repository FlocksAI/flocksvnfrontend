export interface IProjectDetailBanner {
  collectedBudget: number | string;
  numberInvestors: number | string;
  closingDate: string;
  logoImage: TLogoImage;
  createdAt: string;
}

export type TLogoImage = {
  mediaType: string;
  url: string;
};
