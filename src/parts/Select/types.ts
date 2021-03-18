export type OptionType = {
  name: string;
  value: string;
};

export interface SelectInterface {
  title: string;
  groupName: string;
  options: OptionType[];
  error?: string;
  touched?: boolean;
  onChange: (e: any) => void;
}
