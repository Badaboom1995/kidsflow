export interface CheckboxInterface {
  children?: React.ReactNode;
  name: string;
  error: string;
  touched: any;
  setTouched: (name: any) => void;
}
