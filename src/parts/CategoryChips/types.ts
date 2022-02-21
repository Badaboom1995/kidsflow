export interface ICategoryChips {
  title?: any;
  text?: string;
  list: { name: string; value: string }[];
  value: any;
  name: string;
  error?: string;
  touched?: boolean;
  side?: (e: string) => void
}
