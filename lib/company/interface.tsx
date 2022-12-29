export interface CreateCompanyInput {
  control?: any;
  errors?: any;
  introVideo?: string;
  registrationDocs?: string;
  taxReceipt?: string;
  handleContinue?: () => void;
  setData?: (data: any) => void;
  setStep?: () => void;
  setIntroVideo?: (data: string) => void;
  setRegistrationDocs?: (data: string) => void;
  setTaxReceipt?: (data: string) => void;
}

export interface IModalCreateTeamMember {
  isModalOpen: boolean;
  handleOk: (data: any) => void;
  handleCancel: () => void;
  record?: any;
}
