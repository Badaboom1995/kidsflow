import React from "react";
import {
  Wrapper,
  TableContainer,
  Row,
  Cell,
  THead,
  TBody,
  Footer,
  Controls,
  ControlsItem,
  Arrow,
} from "./styled";

import { Field } from ".";
import { SieveType } from "ducks/sieve/types";

interface ITableView {
  data: React.ReactNode[];
  fields: Field[];
  changeSieveValue: any;
}

function TableView({ data, fields, changeSieveValue }: ITableView) {
  return (
    <Wrapper>
      <Controls>
        {fields.map((item) => (
          <ControlsItem
            key={item.label}
            {...item.props}
            placeholder={item.label}
            onChange={(e) => {
              changeSieveValue(SieveType.Filter, item.key, e.target.value);
            }}
          />
        ))}
      </Controls>
      <TableContainer>
        <THead>
          <Row head>
            {fields.map((item) => (
              <Cell key={item.key} textalign={item.props?.textalign}>
                {item.label}
              </Cell>
            ))}
          </Row>
        </THead>
        <TBody>{data}</TBody>
      </TableContainer>
      <Footer>
        <Arrow right /> <Arrow />
        <span>1-11 из 1240</span>
      </Footer>
    </Wrapper>
  );
}
export default TableView;
