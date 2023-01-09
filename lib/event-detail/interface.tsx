export interface IContentHeadDetail {
  headerImage: TCoverImage;
  title: string;
  location: string;
  executionDateStart: string;
  executionDateEnd: string;
}

export interface IContentDetailEvent {
  rawContent: string;
}
type TCoverImage = {
  url: string;
  mediaType: string;
};
