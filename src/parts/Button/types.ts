export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: any) => void;
  type?: "ghost";
  size?: "small" | "full";
  inline?: boolean;
  icon?: string;
};
