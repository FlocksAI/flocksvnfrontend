export interface IEvent {
  title: string;
  content: string;
  headerImage: TCoverImage;
  executionDateStart: string;
}

type TCoverImage = {
  mediaType: string;
  url: string;
};
