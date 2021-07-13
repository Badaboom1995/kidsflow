type FieldType = "text" | "select" | "textarea" | "chips";
type YupType = { key: string; args: any[] };
export type TabsType = { name: string; fields: string[] }[];

type InputType = {
  name: string;
  value?: string;
  label?: any;
  options?: any[];
  col?: number;
  icon?: string;
  type?: FieldType;
  title?: string;
  yup?: YupType[];
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
