import React from 'react';
import {
  Wrapper,
  TableContainer,
  Row,
  Cell,
  THead,
  TBody,
  ShadowContainer,
  Controls,
  ControlsItem,
} from './styled';

import { ITableView } from './types';

import SortControl from './components/SortControl/SortControl';
import Pagination from './components/Pagination';
import GlobalFunctions from './components/GlobalFunctions';

function TableView({
  data,
  fields,
  pagination,
  filterFunction,
  sortFunction,
  hideControls,
  toggleAllItems,
  globalControls,
  choosedItems,
}: ITableView) {
  return (
    <Wrapper>
      <GlobalFunctions
        toggleAllItems={toggleAllItems}
        controls={globalControls}
        choosedItems={choosedItems}
      />
      {!hideControls && (
        <Controls>
          {fields.map((item, index) => (
            <ControlsItem
              {...item.props}
              key={index}
              active={item.isFilterable}
              disabled={!item.isFilterable}
              placeholder={item.label}
              onChange={(e) => {
                filterFunction({
                  fieldName: item.key,
                  fieldValue: e.target.value,
                });
              }}
            />
          ))}
        </Controls>
      )}
      <ShadowContainer>
        <TableContainer>
          <THead>
            <Row head>
              {fields.map((item, index) => (
                <Cell key={index} textalign={item.props?.textalign}>
                  {item.isSortable ? (
                    <SortControl name={item.key} callback={sortFunction}>
                      {item.label}
                    </SortControl>
                  ) : (
                    item.label
                  )}
                </Cell>
              ))}
            </Row>
          </THead>
          <TBody>
            {data || (
              <tr>
                <td>Загрузка...</td>
              </tr>
            )}
          </TBody>
        </TableContainer>
        {data && pagination && <Pagination pagination={pagination} />}
      </ShadowContainer>
    </Wrapper>
  );
}
export default TableView;
