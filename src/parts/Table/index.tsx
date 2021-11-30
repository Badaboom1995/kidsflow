import React, { useState } from "react";
import TableView from "./view";
import { Cell, Row, RowCheckbox, RowFunctions, CheckBox } from "./styled";
import { ITable } from "./types";
import RowFuncsMenu from "./components/RowFunctions";
import GlobalFunctions from "./components/GlobalFunctions";

/**
 * Table takes field's setting and items to show
 * @param label show text in head of table
 * @param key connect field settings with current item
 * @param align optional. Align text - 'left', 'right', 'center'
 * @param width optional. Cell width ('100px')
 * @param getComponent optional func. Return wrapper component for value
 */

function Table({ fields, filters, items, onRowClick, pagination }: ITable) {
  const primaryKey = fields.find((item) => item.primaryKey).key;
  const [choosedIds, setChoosedIds] = useState([]);

  const normalizedItems = items.length
    ? items.map((item) => fields.map(({ key }) => ({ key, value: item[key] })))
    : null;

  const allIds = items?.map((item) => item[primaryKey]);

  const toggleId = (id: string) => {
    choosedIds.includes(id)
      ? setChoosedIds(choosedIds.filter((item) => item !== id))
      : setChoosedIds([...choosedIds, id]);
  };
  const toggleAllIds = (checked: boolean) => {
    checked ? setChoosedIds([]) : setChoosedIds(allIds);
  };

  const getComponent = (key, value) =>
    fields.find((item) => item.key === key)?.getComponent?.(value) || value;

  const getProperties = (key) => fields.find((item) => item.key === key)?.props;

  const getTableData = () =>
    normalizedItems?.map((rowData, index) => {
      const itemId = rowData.find((item) => item.key === primaryKey).value;
      return (
        <Row
          key={index}
          onClick={(e: any) => {
            const entity = items.find((item) => item[primaryKey] === itemId);
            onRowClick(entity);
          }}
        >
          {rowData.map(({ key, value }, index) => (
            <Cell key={key} {...getProperties(key)}>
              {index === 0 && (
                <RowCheckbox
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleId(itemId);
                  }}
                >
                  <CheckBox selected={choosedIds.includes(itemId)} />
                </RowCheckbox>
              )}
              {getComponent(key, value)}
              {index === rowData.length - 1 && (
                <RowFuncsMenu
                  functions={[
                    { name: "one", method: (id) => id },
                    { name: "two", method: (id) => id },
                    { name: "three", method: (id) => id },
                  ]}
                />
              )}
            </Cell>
          ))}
        </Row>
      );
    });

  return (
    <div>
      <GlobalFunctions setCheckedAll={toggleAllIds} />
      <TableView
        data={getTableData()}
        fields={fields}
        filters={filters}
        pagination={pagination}
      />
    </div>
  );
}
export default Table;
