type Dictionary = { value: string; name: string };

export interface IFormState {
  ageFrom: string;
  ageTo: string;
  date: string;
  name: string;
  number: string;
  org: string;
  partner: string;
  type: string;
  category?: string[];
}

export interface IFormContactsState {
  adress: string;
  email: string;
  phone: string;
  site: string;
}

export interface IFormView {
  prompts: string[];
  // categories: Dictionary[];
  // directions: Dictionary[];
  getSearchPrompts: (p: string) => void;
  currentEvent: Record<string, string>;
  isLoading: boolean;
  // setCurrentDirection: (p: string) => void;
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
