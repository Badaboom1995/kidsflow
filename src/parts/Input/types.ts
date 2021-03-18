export interface InputInterface {
  name: string;
  placeholder?: string;
  error?: string;
  icon?: string;
  password?: boolean;
  touched?: boolean;
  multiline?: number;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}
