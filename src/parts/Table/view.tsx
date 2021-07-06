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
} from "./styled";

import { Field } from ".";
import { SieveType } from "ducks/sieve/types";

interface ITableView {
  data: React.ReactNode[];
  fields: Field[];
  changeSieveValue: any;
  pagination?: {
    pageNumber: number;
    pageSize: number;
    totalEntities: number;
    method: (nextPage: number) => void;
  };
}

function TableView({ data, fields, changeSieveValue, pagination }: ITableView) {
  return (
    <Wrapper>
      <Controls>
        {fields.map((item, index) => (
          <ControlsItem
            key={index}
            {...item.props}
            placeholder={item.label}
            onChange={(e) => {
              changeSieveValue(SieveType.Filter, item.key, e.target.value);
            }}
          />
        ))}
      </Controls>
      <ShadowContainer>
        <TableContainer>
          <THead>
            <Row head>
              {fields.map((item, index) => (
                <Cell key={index} textalign={item.props?.textalign}>
                  {item.label}
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
