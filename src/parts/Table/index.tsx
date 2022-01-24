import React, { useState } from 'react';
import TableView from './view';
import { Cell, Row, RowCheckbox, CheckBox } from './styled';
import { ITable } from './types';
import RowFuncsMenu from './components/RowFunctions';

/**
 * Table takes field's setting and items to show
 * @param label show text in head of table
 * @param key connect field settings with current item
 * @param align optional. Align text - 'left', 'right', 'center'
 * @param width optional. Cell width ('100px')
 * @param getComponent optional func. Return wrapper component for value
 */

function Table(props: ITable) {
  const { fields, items, onRowClick, globalControls } = props;
  const [choosedItems, setChoosedItems] = useState([]);
  const primaryKey = fields.find((item) => item.primaryKey).key;

  const toggleItem = (targetId: string) => {
    const isTargetItem = (item) => item[primaryKey] === targetId;
    choosedItems.find(isTargetItem)
      ? setChoosedItems(choosedItems.filter((item) => !isTargetItem(item)))
      : setChoosedItems([...choosedItems, items.find(isTargetItem)]);
  };

  const toggleAllItems = (checked: boolean) => {
    checked ? setChoosedItems([]) : setChoosedItems(items);
  };

  const normalizedItems = items.length
    ? items.map((item) => fields.map(({ key }) => ({ key, value: item[key] })))
    : null;

  const getComponent = (key, value) =>
    fields.find((item) => item.key === key)?.getComponent?.(value) || value;

  const getProperties = (key) => fields.find((item) => item.key === key)?.props;

  const getTableData = () =>
    normalizedItems?.map((rowData, index) => {
      const itemId = rowData.find((item) => item.key === primaryKey).value;

      return (
        <Row
          key={index}
          onClick={() => {
            const entity = items.find((item) => item[primaryKey] === itemId);
            onRowClick && onRowClick(entity);
          }}
        >
          {rowData.map(({ key, value }, index) => (
            <Cell key={key} {...getProperties(key)}>
              {index === 0 && (
                <RowCheckbox
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(itemId);
                  }}
                >
                  <CheckBox
                    selected={choosedItems.find(
                      (item) => item[primaryKey] === itemId
                    )}
                  />
                </RowCheckbox>
              )}
              {getComponent(key, value)}
              {index === rowData.length - 1 && (
                <RowFuncsMenu
                  functions={[
                    { name: 'one', method: (id) => id },
                    { name: 'two', method: (id) => id },
                    { name: 'three', method: (id) => id },
                  ]}
                />
              )}
            </Cell>
          ))}
        </Row>
      );
    });

  return (
    <TableView
      data={getTableData()}
      toggleAllItems={toggleAllItems}
      globalControls={globalControls}
      choosedItems={choosedItems}
      primaryKey={primaryKey}
      {...props}
    />
  );
}
export default Table;
