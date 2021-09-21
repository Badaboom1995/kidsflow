export interface ICategoryChips {
  title?: string;
  text?: string;
  list: { name: string; value: string }[];
  value: string;
  name: string;
  error?: string;
  touched?: boolean;
}
