import { ReactNode } from "react";

export interface ISubHead {
  children: ReactNode;
  isShowHead?: boolean;
}

export interface IContentHead {
  companyName?: string;
  companySubTitle?: string;
}
