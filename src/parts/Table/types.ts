export enum TSortDirection {
  Up = 0,
  Down = 1,
}
export type TGlobalControl = {
  buttonName: string;
  method: (items: Record<string, any>[]) => void
  buttonType?: 'default' | 'delete' | 'transparent';
}
export type TFilterFunction = ({ fieldName, fieldValue }: { fieldName: string, fieldValue: string }) => void
export type TSortFunction = ({ fieldName, sortDirection }: { fieldName: string, sortDirection: TSortDirection }) => void


export type Field = {
  primaryKey?: boolean;
  label: string;
  key: string;
  isFilterable?: boolean;
  isSortable?: boolean;
  props?: { textalign?: string; width?: string };
  getComponent?: (value: any) => React.ReactNode;
};


export interface ITable {
  items: Record<string, any>[];
  fields: Field[];
  filters?: Record<string, any>
  onRowClick?: (ItemId: Record<string, any>) => void;
  filterFunction?: TFilterFunction;
  sortFunction?: TSortFunction;
  pagination?: {
    pageNumber: number;
    pageSize: number;
    totalEntities: number;
    method: (nextPage: number) => void;
  };
  hideControls?: boolean;
  globalControls?: TGlobalControl[];
}
export interface ITableView extends ITable {
  data: React.ReactNode[];
  primaryKey: string
  toggleAllItems?: (checked: boolean) => void
  choosedItems: Record<string, any>[]
}

