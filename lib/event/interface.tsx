export interface IEvent {
  title: string;
  content: string;
  headerImage: TCoverImage;
  executionDateStart: string;
  id: number;
}

type TCoverImage = {
  mediaType: string;
  url: string;
};
