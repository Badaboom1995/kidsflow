export type Option = {
  name: string;
  value: string;
};
export interface RadioGroupInterface {
  error: string;
  options: Option[];
  groupName: string;
  touched: boolean;
}
