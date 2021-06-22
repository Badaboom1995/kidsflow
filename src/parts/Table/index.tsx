import React from "react";
import TableView from "./view";
import { Cell, Row } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterValue } from "ducks/sieve/slice";
import { selectFilteredData } from "ducks/sieve/selectors";

export type Field = {
  label: string;
  key: string;
  props?: { textalign?: string; width?: string };
  getComponent?: (value: any) => React.ReactNode;
};

interface ITable {
  items: any[];
  fields: Field[];
  onRowClick?: { itemIdKey: string; method: (ItemId: string) => void };
  pagination?: {
    pageNumber: number;
    pageSize: number;
    totalEntities: number;
    method: (nextPage: number) => void;
  };
}

/**
 * Table takes field's setting and items to show
 * @param label show text in head of table
 * @param key connect field settings with current item
 * @param align optional. Align text - 'left', 'right', 'center'
 * @param width optional. Cell width ('100px')
 * @param getComponent optional func. Return wrapper component for value
 */

function Table({ fields, items, onRowClick, pagination }: ITable) {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredData(items));

  const changeSieveValue = (type: string, key: string, value: string) => {
    dispatch(changeFilterValue({ key, value }));
  };

  const getNormalizedItems = <T,>(
    items: T[]
  ): { key: string; value: string }[][] =>
    items.map((item) =>
      fields.map((field) => ({ key: field.key, value: item[field.key] }))
    );

  const getComponent = (key, value) =>
    fields.find((item) => item.key === key)?.getComponent?.(value) || value;

  const getProperties = (key) => fields.find((item) => item.key === key)?.props;

  const getTableData = () =>
    filteredItems.length
      ? getNormalizedItems(filteredItems).map((rowData, index) => (
          <Row
            key={index}
            onClick={(e) => {
              const rowId = rowData.find(
                (item) => item.key === onRowClick.itemIdKey
              ).value;
              onRowClick?.method(
                items.find(
                  (item) => item[onRowClick.itemIdKey].toString() === rowId
                )
              );
            }}
          >
            {rowData.map(({ key, value }) => (
              <Cell key={key} {...getProperties(key)}>
                {getComponent(key, value)}
              </Cell>
            ))}
          </Row>
        ))
      : null;

  return (
    <TableView
      data={getTableData()}
      fields={fields}
      changeSieveValue={changeSieveValue}
      pagination={pagination}
    />
  );
}
export default Table;
