type FieldType = "text" | "select";
type OptionType = { name: string; value: string };
type YupType = { key: string; args: any[] };

type InputType = {
  name: string;
  options?: any[];
  label?: string;
  col?: number;
  icon?: string;
  type?: FieldType;
  title?: string;
  yup?: YupType[];
};

export type formConfigType = {
  settings: {
    defaultType: FieldType;
    defaultCol: number;
  };
  fields: InputType[];
};
