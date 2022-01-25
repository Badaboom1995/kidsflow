import Table from 'parts/Table';
import React, { useEffect } from 'react';
import { Wrapper, OrgName } from './styled';
import { Status } from 'parts/styled';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from './duck/actions';
import { selectEvents, selectPagination } from './duck/selectors';

function EventsTable() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const pagination = useSelector(selectPagination);
  const history = useHistory();

  const onRowClick = (entity: Record<string, any>) => {
    history.push(`/events/add/${entity.eventId}`);
  };
  const searchByName = (name: string) => {
    dispatch(getEvents({ page: 0, name }));
  };

  useEffect(() => {
    dispatch(getEvents({ page: 0 }));
  }, []);

  const fields = [
    {
      primaryKey: true,
      label: 'ID',
      isSortable: true,
      key: 'entityId',
      props: { textalign: 'center', width: '7%' },
    },
    {
      label: 'Название',
      key: 'name',
      isFilterable: true,
      isSortable: true,
      props: { width: '10%' },
      getComponent: (text) => <OrgName>{text}</OrgName>,
    },
    {
      label: 'Партнер',
      isFilterable: true,
      key: 'partnerName',
      props: { width: '10%' },
    },
    {
      label: 'Организация',
      key: 'orgaizationName',
      props: { width: '10%' },
    },
    {
      label: 'Направление',
      key: 'eventType',
      props: { width: '10%' },
    },
    {
      label: 'Категория',
      key: 'eventCategory',
      props: { width: '10%' },
    },
    {
      label: 'Дата',
      key: 'eventDate',
      props: { width: '10%' },
    },
    {
      label: 'Статус',
      key: 'isActive',
      props: { width: '10%' },
      getComponent: (isActive) => (
        <Status status={isActive ? 'active' : 'disabled'}>
          {isActive ? 'Активен' : 'Заблокирован'}
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
        onRowClick={onRowClick}
        fields={fields}
        items={events}
        filterFunction={({ fieldName, fieldValue }) => {
          searchByName(fieldValue);
        }}
        sortFunction={({ fieldName, sortDirection }) => {
          console.log(fieldName, sortDirection);
        }}
      />
    </Wrapper>
  );
}
export default EventsTable;
