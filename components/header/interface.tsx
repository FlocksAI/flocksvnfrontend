import { ReactNode } from "react";

export interface ISubHead {
  children: ReactNode;
  isShowHead?: boolean;
  routerDetail?: boolean;
  contentOne?: string;
  contentTwo?: string;
  contentThree?: string;
  contentFour?: string;
  contentFive?: string;
  hrefOne?: string;
  hrefTwo?: string;
  hrefThree?: string;
  hrefFour?: string;
}

export interface IContentHead {
  companyName?: string;
  companySubTitle?: string;
  logoImage?: TLogoImage;
  companyCategory?: TCompanyCategory;
}

export type TLogoImage = {
  mediaType: string;
  url: string;
};

export type TCompanyCategory = {
  id: number;
  name: string;
};
