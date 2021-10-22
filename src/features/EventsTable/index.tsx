import Table from "parts/Table";
import React, { useEffect } from "react";
import { Wrapper, OrgName } from "./styled";
import { Status } from "parts/styled";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "./duck/actions";
import { selectEvents, selectPagination } from "./duck/selectors";

function EventsTable() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const pagination = useSelector(selectPagination);
  const history = useHistory();

  const onRowClick = (entity: any) => {
    history.push(`/events/add/${entity.eventId}`);
  };
  const sortByName = (name: string) => {
    dispatch(getEvents({ page: 0, name }));
  };

  useEffect(() => {
    dispatch(getEvents({ page: 0 }));
  }, []);

  const fields = [
    {
      label: "ID",
      key: "entityId",
      props: { textalign: "center", width: "7%" },
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
      key: "partnerName",
      props: { width: "10%" },
    },
    {
      label: "Организация",
      key: "orgaizationName",
      props: { width: "10%" },
    },
    {
      label: "Направление",
      key: "eventType",
      props: { width: "10%" },
    },
    {
      label: "Категория",
      key: "eventCategory",
      props: { width: "10%" },
    },
    {
      label: "Дата",
      key: "eventDate",
      props: { width: "10%" },
    },
    {
      label: "Статус",
      key: "isActive",
      props: { width: "10%" },
      getComponent: (isActive) => (
        <Status status={isActive ? "active" : "disabled"}>
          {isActive ? "Активен" : "Заблокирован"}
        </Status>
      ),
    },
  ];

  return (
    <Wrapper>
      <Table
        pagination={{
          ...pagination,
          method: (nextPage) => {
            dispatch(getEvents({ page: nextPage }));
          },
        }}
        searchByName={sortByName}
        sort={{
          name: "address",
          status: "0",
          method: (name, status) => {
            dispatch(getEvents({ page: 0, name }));
          },
        }}
        onRowClick={{ method: onRowClick, itemIdKey: "entityId" }}
        fields={fields}
        items={events}
      />
    </Wrapper>
  );
}
export default EventsTable;
