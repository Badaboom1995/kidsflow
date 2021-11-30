export type TStatus = 0 | 1 | 2;
export type TSort = {
  name: string;
  status: string;
  method: (name: string, status: TStatus) => void;
};

export type Field = {
  primaryKey?: boolean;
  label: string;
  key: string;
  filterType?: string;
  sortOn?: boolean;
  filterOn?: boolean;
  props?: { textalign?: string; width?: string };
  filterFunc?: (value: any) => void;
  getComponent?: (value: any) => React.ReactNode;
};

export interface ITable {
  items: any[];
  fields: Field[];
  filters?: Record<string, any>
  // sort?: TSort;
  searchByName?: (name: string) => void
  onRowClick?: (ItemId: string) => void;
  filter?: ({ key, value }: { key: string, value: string }) => void;
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
  filters: Record<string, any>
  searchByName?: (name: string) => void
  // sort?: TSort;
  pagination?: {
    pageNumber: number;
    pageSize: number;
    totalEntities: number;
    method: (nextPage: number) => void;
  };
}
