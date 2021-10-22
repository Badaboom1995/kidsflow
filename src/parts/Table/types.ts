export type TStatus = 0 | 1 | 2;
export type TSort = {
  name: string;
  status: string;
  method: (name: string, status: TStatus) => void;
};

export type Field = {
  label: string;
  key: string;
  filterType?: string;
  sortable?: boolean;
  props?: { textalign?: string; width?: string };
  getComponent?: (value: any) => React.ReactNode;
};

export interface ITable {
  items: any[];
  fields: Field[];
  sort?: TSort;
  searchByName?: (name: string) => void
  onRowClick?: { itemIdKey: string; method: (ItemId: string) => void };
  pagination?: {
    pageNumber: number;
    pageSize: number;
    totalEntities: number;
    method: (nextPage: number) => void;
  };
}

export interface ITableView {
  data: React.ReactNode[];
  fields: Field[];
  changeSieveValue: any;
  searchByName?: (name: string) => void
  sort?: TSort;
  pagination?: {
    pageNumber: number;
    pageSize: number;
    totalEntities: number;
    method: (nextPage: number) => void;
  };
}
