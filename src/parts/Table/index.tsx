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
}
/**
 * Table takes fields setting and items to show
 * @param label show text in head of table
 * @param key connect field settings with current item
 * @param align optional. Align text - 'left', 'right', 'center'
 * @param width optional. Cell width ('100px')
 * @param getComponent optional func. Return wrapper component for value
 */
function Table({ fields, items }: ITable) {
  const dispatch = useDispatch();

  const filteredItems = useSelector(selectFilteredData(items));

  const changeSieveValue = (type: string, key: string, value: string) => {
    dispatch(changeFilterValue({ key, value }));
  };

  const getItemPropsArray = <T,>(items: T[]): any[] =>
    items.map((item) =>
      Object.keys(item).map((key) => ({ key: key, value: item[key] }))
    );
  const getComponent = (key, value) =>
    fields.find((item) => item.key === key).getComponent?.(value) || value;

  const getProperties = (key) => fields.find((item) => item.key === key).props;
  const getTableData = () =>
    getItemPropsArray(filteredItems).map((rowData) => (
      <Row>
        {rowData.map(({ key, value }) => (
          <Cell key={key} {...getProperties(key)}>
            {getComponent(key, value)}
          </Cell>
        ))}
      </Row>
    ));

  return (
    <TableView
      data={getTableData()}
      fields={fields}
      changeSieveValue={changeSieveValue}
    />
  );
}
export default Table;
