export type configType = { title: string; settings: any; fields: any };
import { refType } from "common/types";

export interface IAddOrgView {
  organizationId: string;
  submitMethod:
  | ((body: any, partnerId) => Promise<any>)
  | ((body: any, id: string) => Promise<any>);
  formRefs: {
    general: refType;
    contacts: refType;
    legal: refType;
  };
  setFormRef: {
    general: (p: refType) => void;
    contacts: (p: refType) => void;
    legal: (p: refType) => void;
  };
}
export interface IPreviewCard {
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
  isActive: boolean;
};

export type TContactsFormState = {
  coords: string;
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
