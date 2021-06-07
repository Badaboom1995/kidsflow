type FieldType = "text" | "select" | "textarea";
type YupType = { key: string; args: any[] };

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
  settings: {
    defaultType: FieldType;
    defaultCol: number;
  };
  fields: InputType[];
};
