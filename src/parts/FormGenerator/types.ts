type FieldType =
  | "text"
  | "select"
  | "textarea"
  | "chips"
  | "timeSchedule"
  | "search";
type YupType = { key: string; args: any[] };
export type TabsType = { name: string; fields: string[] }[];

type InputType = {
  name: string;
  value?: string;
  label?: any;
  options?: { name: string; value: string }[];
  col?: number;
  icon?: string;
  type?: FieldType;
  title?: string;
  yup?: YupType[];
  onChange?: (value: string) => void;
  prompts?: string[];
};

export type formConfigType = {
  title?: string;
  tabs?: { name: string; fields: string[] }[];
  settings: {
    defaultType: FieldType;
    defaultCol: number;
  };
  fields: InputType[];
};
