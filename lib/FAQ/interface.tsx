export interface IFAQContent {
  dataList: Array<TDataContent>;
  search?: string;
}

export interface IHeadFAQ {
  handSearch: (data: any) => void;
}

type TDataContent = {
  title: string;
  rawContent: string;
  category: number;
  id: number;
};
