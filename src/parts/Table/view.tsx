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
} from "./styled";

import { ITableView } from "./types";

import SortControl from "./components/SortControl/SortControl";
import Pagination from "./components/Pagination";
import FilterSelect from "features/EventsTable/components/FilterSelect";

function TableView({
  data,
  fields,
  pagination,
  sort,
  searchByName,
}: ITableView) {
  return (
    <Wrapper>
      <Controls>
        {fields.map((item, index) => (
          <ControlsItem
            key={index}
            active={item.key === "name"}
            {...item.props}
            placeholder={item.label}
            onChange={(e) => {
              searchByName(e.target.value);
            }}
          />
        ))}
        {/* <SubmitButton>Применить</SubmitButton> */}
      </Controls>
      {/* <Controls>
        {fields.map((item, index) =>
          item.filterType === "select" ? (
            <FilterSelect {...item.props} title={"Категории"} />
          ) : (
            <ControlsItem
              key={index}
              {...item.props}
              placeholder={item.label}
              onChange={(e) => {
                searchByName(e.target.value);
                // changeSieveValue(SieveType.Filter, item.key, e.target.value);
              }}
            />
          )
        )}
        <SubmitButton>Применить</SubmitButton>
      </Controls> */}
      <ShadowContainer>
        <TableContainer>
          <THead>
            <Row head>
              {fields.map((item, index) => (
                <Cell key={index} textalign={item.props?.textalign}>
                  {item.sortable ? (
                    <SortControl name={item.key} callback={sort.method}>
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
