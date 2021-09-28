import Table from "parts/Table";
import React, { useEffect } from "react";
import { Wrapper, OrgName, Address, Category, Photo } from "./styled";
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
    dispatch(getOrganizations({ page: 0 }));
  }, []);

  const normalizedOrganizations = organizations.map((item) => ({
    ...item,
    eventType: item.eventTypes[0],
    eventCategories: item.eventCategories
      .filter((category) => item.eventTypes[0] !== category)
      .join(),
    photos: item.photos[0]?.cloudUrl,
    partner: item.partner ? item.partner.firstName : "Нет партнера",
    status: item.isActive ? "Активный" : "Заблокирован",
  }));

  const fields = [
    {
      label: "ID",
      key: "entityId",
      props: { textalign: "center", width: "7%" },
    },
    {
      label: "Фото",
      key: "photos",
      props: { width: "7%" },
      getComponent: (url) => <Photo src={url} alt="" />,
    },
    {
      label: "Название",
      key: "name",
      sortable: true,
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
      sortable: true,
      props: { width: "15%" },
      getComponent: (adress) => <Address>{adress}</Address>,
    },
    {
      label: "Направление",
      key: "eventType",
      filterType: "select",
      align: "center",
    },
    {
      label: "Категория",
      key: "eventCategories",
      filterType: "select",
      props: { width: "25%" },
      getComponent: (categories) =>
        categories.split(",").map((item) => <Category>{item}</Category>),
    },
    {
      label: "Статус",
      key: "status",
      sortable: true,
      filterType: "select",
      props: { width: "10%" },
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
            dispatch(getOrganizations({ page: nextPage }));
          },
        }}
        sort={{
          name: "address",
          status: "2",
          method: (name, status) => {
            dispatch(getOrganizations({ page: 0, name, status }));
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
