import React from "react";
import {
  Wrapper,
  TableContainer,
  Row,
  Cell,
  THead,
  TBody,
  ShadowContainer,
  Controls,
  SubmitButton,
  ControlsItem,
  CheckBox,
} from "./styled";

import { ITableView } from "./types";

import SortControl from "./components/SortControl/SortControl";
import Pagination from "./components/Pagination";
import GlobalFunctions from "./components/GlobalFunctions";
// import FilterSelect from "features/EventsTable/components/FilterSelect";

function TableView({ data, fields, pagination, filters }: ITableView) {
  return (
    <Wrapper>
      <Controls>
        {fields.map((item, index) => (
          <ControlsItem
            {...item.props}
            key={index}
            active={!!item.filterFunc}
            disabled={!item.filterFunc}
            placeholder={item.label}
            onChange={(e) => {
              item.filterFunc(e.target.value);
            }}
          />
        ))}
        {/* <SubmitButton>Применить</SubmitButton> */}
      </Controls>
      <ShadowContainer>
        <TableContainer>
          <THead>
            <Row head>
              {fields.map((item, index) => (
                <Cell key={index} textalign={item.props?.textalign}>
                  {item.sortOn ? (
                    <SortControl name={item.key} callback={() => {}}>
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
