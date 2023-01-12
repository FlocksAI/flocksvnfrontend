export interface IContentProjectDetail {
  phoneNumber: string;
  email: string;
  website: string;
  companyName: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  presentDetails: Array<TPresentDetails>;
  presentDocuments: Array<TPresentDocuments>;
}

export type TPresentDetails = {
  id: number;
  title: string;
  details: string;
  company: number;
};

export type TPresentDocuments = {
  id: number;
  fileName: string;
  file: TFile;
  company: number;
};

export type TFile = {
  mediaType: string;
  url: string;
};

export interface ITeamProjectDetail {
  companyPresentTeamMember: Array<TTeam>;
  companyName: string;
  logoImage: TFile;
}

export type TTeam = {
  about: string;
  company: number;
  id: number;
  linkedin: string;
  name: string;
  position: string;
  image: TFile;
};
