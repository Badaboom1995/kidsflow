import Table from 'parts/Table';
import React, { useEffect } from 'react';
import { Wrapper, OrgName } from './styled';
import { Status } from 'parts/styled';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getEvents } from './duck/actions';

function EventsTable() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onRowClick = (entity: Record<string, any>) => {
    history.push(`/events/add/${entity.eventId}`);
  };

  useEffect(() => {
    dispatch(getEvents({ page: 0 }));
  }, []);

  const fields = [
    {
      primaryKey: true,
      label: 'ID',
      key: 'entityId',
      props: { textalign: 'center', width: '7%' },
    },
    {
      label: 'Иконка',
      key: 'icon',
      props: { width: '10%' },
    },
    {
      label: 'Название',
      key: 'name',
      props: { width: '10%' },
    },
    {
      label: 'Сториз',
      key: 'stories',
    },
    {
      label: 'Дата создания',
      key: 'orgaizationName',
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
        onRowClick={onRowClick}
        fields={fields}
        items={[]}
        sortFunction={({ fieldName, sortDirection }) => {
          console.log(fieldName, sortDirection);
        }}
      />
    </Wrapper>
  );
}
export default EventsTable;
