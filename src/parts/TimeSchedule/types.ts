export type TDay = {
  completed: boolean;
  openTime: string;
  closeTime: string;
};

export type TData = (TDay | null)[];

export interface ITimeSchedule {
  title: string;
  onChange: (data: any) => void;
  initialValues?: any;
}
