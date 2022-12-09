export interface IntroductionInput {
  setIsShow: (data: boolean) => void;
}

export interface CreateInvestInput {
  control: any;
  handleContinue?: (data: boolean) => void;
}
