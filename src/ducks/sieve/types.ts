export enum SortDirection {
  Up = "up",
  Down = "down",
}
export enum SieveType {
  Sort = "sort",
  Filter = "filter",
}
export type FilterType = { key: string; value: string };
export type SortType = { key: string; value: SortDirection };
