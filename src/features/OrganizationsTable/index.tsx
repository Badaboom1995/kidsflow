import Table from "parts/Table";
import React, { useEffect } from "react";
import { Wrapper, OrgName, Adress } from "./styled";
import { Status } from "parts/styled";

import AddButton from "parts/AddButton";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrganizations } from "./duck/actions";
import { selectOrganizations, selectPagination } from "./duck/selectors";

function OrganizationsTable() {
  const dispatch = useDispatch();
  const organizations = useSelector(selectOrganizations);
  const pagination = useSelector(selectPagination);
  const history = useHistory();
  const onRowClick = (entity: any) => {
    history.push(`/orgs/add-org/${entity.organizationId}`);
  };

  useEffect(() => {
    dispatch(getOrganizations(0));
  }, []);

  const normalizedOrganizations = organizations.map((item) => {
    return {
      ...item,
      eventCategory: item.eventCategories[0],
      partner: item.partner ? item.partner.firstName : "Нет партнера",
      status: item.isActive ? "Активный" : "Заблокирован",
    };
  });

  const fields = [
    {
      label: "ID",
      key: "entityId",
      props: { textalign: "center", width: "7%" },
    },
    {
      label: "Фото",
      key: "uploads",
      props: { width: "7%" },
      getComponent: (uploads) => {
        console.log(uploads);
        return <img src={uploads[0]?.cloudUrl} alt="" />;
      },
    },
    {
      label: "Название",
      key: "name",
      props: { width: "10%" },
      getComponent: (text) => <OrgName>{text}</OrgName>,
    },
    {
      label: "Партнер",
      key: "partner",
      props: { width: "10%" },
      getComponent: (partner) => partner.firstName,
    },
    {
      label: "Адрес",
      key: "address",
      props: { width: "13%" },
      getComponent: (adress) => <Adress>{adress}</Adress>,
    },
    {
      label: "Направление",
      key: "eventCategory",
      filterType: "select",
      props: { width: "20%" },
    },
    {
      label: "Категория",
      key: "eventCategories",
      filterType: "select",
      props: { width: "17%" },
      getComponent: (item) => item.split(",")[0],
    },
    {
      label: "Статус",
      key: "status",
      filterType: "select",
      getComponent: (status) => (
        <Status status={status === "Активный" ? "active" : "disabled"}>
          {status}
        </Status>
      ),
    },
  ];

  return (
    <Wrapper>
      <AddButton to={`/orgs/add-org`} />
      <Table
        pagination={{
          ...pagination,
          method: (nextPage) => {
            dispatch(getOrganizations(nextPage));
          },
        }}
        onRowClick={{ method: onRowClick, itemIdKey: "entityId" }}
        fields={fields}
        items={normalizedOrganizations}
      />
    </Wrapper>
  );
}
export default OrganizationsTable;
