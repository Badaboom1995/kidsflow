export interface SelectInterface {
  title: string;
  groupName: string;
  options: string[];
  error: string;
  touched: boolean;
  onChange: (e: any) => void;
}
