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
      {/* <Footer>
        <Arrow right /> <Arrow />
        <span>1-11 из 1240</span>
      </Footer> */}
    </Wrapper>
  );
}
export default TableView;
