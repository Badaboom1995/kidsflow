export type TSelect = {
  label?: string | React.ReactNode;
  emptyDictTitle?: string
  description?: string | React.ReactNode;
  options: { name: string; value: string }[];
  name: string;
  value?: string;
  title?: string;
  onChange?: (e: any) => void;
};
