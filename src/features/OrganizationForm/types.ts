export type configType = { title: string; settings: any; fields: any };

export interface IPreviewCard {
  maxRightContentHeight: number;
  generalFormState: TGeneralFormState;
  contactFormState: TContactsFormState;
  formalFormState: TFormalFormState;
}

export interface ICardHeader {
  generalFormState: TGeneralFormState;
}

export interface ICardBody {
  generalFormState: TGeneralFormState;
  contactFormState: TContactsFormState;
}

export type TGeneralFormState = {
  about: string;
  ageFrom: string;
  ageTo: string;
  category: any;
  directions: string;
  name: string;
  partnerId: string;
};

export type TContactsFormState = {
  address: string;
  phoneNumber: string;
  email: string;
  site: string;
  businessHours: { openTime: string; closeTime: string; day: number }[];
  stations: { id: string; name: string }[];
};

export type TFormalFormState = {
  entity: string;
  accountNumber: string;
  taxIdNumber: string;
  primaryStateNumber: string;
  legalAddress: string;
};
