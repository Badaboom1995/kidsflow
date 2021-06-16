import Table from "parts/Table";
import React, { useEffect } from "react";
import { Wrapper, OrgName, Adress } from "./styled";
import { Status } from "parts/styled";

import AddButton from "parts/AddButton";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrganizations } from "./duck/actions";
import { selectOrganizations, selectPagination } from "./duck/selectors";

function Orgs() {
  const dispatch = useDispatch();
  const organizations = useSelector(selectOrganizations);
  const pagination = useSelector(selectPagination);
  const history = useHistory();
  const prefix = "";
  const onRowClick = (id: string) => {
    history.push(`${prefix}/orgs/add-org/${id}`);
  };

  useEffect(() => {
    dispatch(getOrganizations(1));
  }, []);

  const normalizedOrganizations = organizations.map((item) => {
    return {
      ...item,
      eventCategory: item.eventCategories[0],
      partner: item.partner ? item.partner.firstName : "Нет партнера",
      status: item.isActive ? "Активный" : "Заблокирован",
    };
  });

  return (
    <Wrapper>
      <AddButton to={`${prefix}/orgs/add-org`} />
      <Table
        pagination={{
          ...pagination,
          method: (nextPage) => {
            dispatch(getOrganizations(nextPage));
          },
        }}
        onRowClick={{ method: onRowClick, itemIdKey: "entityId" }}
        fields={[
          {
            label: "ID",
            key: "entityId",
            props: { textalign: "center", width: "7%" },
          },
          {
            label: "Название",
            key: "name",
            props: { width: "20%" },
            getComponent: (text) => <OrgName>{text}</OrgName>,
          },
          {
            label: "Партнер",
            key: "partner",
            props: { width: "13%" },
            getComponent: (partner) => {
              return partner.firstName;
            },
          },
          {
            label: "Адрес",
            key: "address",
            props: { width: "13%" },
            getComponent: (adress) => <Adress>{adress}</Adress>,
          },
          { label: "Направление", key: "eventCategory" },
          {
            label: "Категория",
            key: "eventCategories",
            props: { width: "15%" },
            getComponent: (item) => item.split(",")[0],
          },
          {
            label: "Статус",
            key: "status",
            getComponent: (status) => (
              <Status status={status === "Активный" ? "active" : "disabled"}>
                {status}
              </Status>
            ),
          },
        ]}
        items={normalizedOrganizations}
      />
    </Wrapper>
  );
}
export default Orgs;
