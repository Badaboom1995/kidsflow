export interface IFormState {
  ageFrom: string,
  ageTo: string,
  date: string,
  name: string,
  number: string,
  org: string,
  partner: string,
  type: string,
  category?: string[];
}

export interface IFormContactsState {
  adress: string,
  email: string,
  phone: string,
  site: string,
}

export interface IEventCard {
  maxRightContentHeight: number;
  formState: IFormState;
  formContactsState?: IFormContactsState;
}

export interface ICardHeader {
  formState: IFormState;
}

export interface ICardBody {
  formState: IFormState;
}
