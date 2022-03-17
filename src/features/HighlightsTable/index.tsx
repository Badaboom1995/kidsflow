import Table from 'parts/Table';
import React, { useEffect } from 'react';
import { Wrapper } from './styled';
import { Status } from 'parts/styled';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHighlights } from './duck/actions';
import { selectHighlights } from './duck/selectors';

function HighlightsTable() {
  const dispatch = useDispatch();
  const history = useHistory();
  const entities = useSelector(selectHighlights).map((item) => ({
    ...item,
    stories: `${item.stories.length} сториз`,
    createDate: 'Неизвестно',
  }));
  const onRowClick = (entity: Record<string, any>) => {
    history.push(`/highlighs/add/${entity.eventId}`);
  };

  useEffect(() => {
    dispatch(getHighlights());
  }, []);
  console.log(entities);
  const fields = [
    {
      primaryKey: true,
      label: 'ID',
      key: 'highlightId',
      props: { textalign: 'center' },
    },
    {
      label: 'Иконка',
      key: 'emoji',
    },
    {
      label: 'Название',
      key: 'title',
    },
    {
      label: 'Сториз',
      key: 'stories',
    },
    {
      label: 'Дата создания',
      key: 'createDate',
    },
    {
      label: 'Статус',
      key: 'isActive',

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
        items={entities || []}
        sortFunction={({ fieldName, sortDirection }) => {
          console.log(fieldName, sortDirection);
        }}
      />
    </Wrapper>
  );
}
export default HighlightsTable;
