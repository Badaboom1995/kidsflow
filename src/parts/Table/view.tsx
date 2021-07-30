import React from "react";
import {
  Wrapper,
  TableContainer,
  Row,
  Cell,
  THead,
  TBody,
  Controls,
  ControlsItem,
  Footer,
  Arrow,
  ShadowContainer,
  SubmitButton,
} from "./styled";

import { ITableView } from "./types";
import { SieveType } from "ducks/sieve/types";
import FilterSelect from "features/OrganizationsTable/components/FilterSelect";
import SortControl from "./components/SortControl/SortControl";

function TableView({
  data,
  fields,
  changeSieveValue,
  pagination,
  sort,
}: ITableView) {
  return (
    <Wrapper>
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
                changeSieveValue(SieveType.Filter, item.key, e.target.value);
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
        <Footer>
          <Arrow
            right
            onClick={() => {
              pagination.method(pagination.pageNumber + 1);
            }}
          />
          <Arrow
            onClick={() => {
              pagination.pageNumber > 0 &&
                pagination.method(pagination.pageNumber - 1);
            }}
          />
          <span>
            {pagination?.pageSize
              ? `${
                  (pagination.pageNumber + 1) * pagination.pageSize -
                  pagination.pageSize +
                  1
                } - ${(pagination.pageNumber + 1) * pagination.pageSize}`
              : "0 - 0"}{" "}
            из {pagination ? pagination?.totalEntities : "0"}
          </span>
        </Footer>
      </ShadowContainer>
    </Wrapper>
  );
}
export default TableView;
