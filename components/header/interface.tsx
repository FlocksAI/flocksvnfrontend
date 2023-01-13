import { ReactNode } from "react";

export interface ISubHead {
  children: ReactNode;
  isShowHead?: boolean;
  routerDetail?: boolean;
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
