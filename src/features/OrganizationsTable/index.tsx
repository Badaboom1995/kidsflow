import Table from 'parts/Table';
import React, { useEffect } from 'react';
import { OrgName, Address, Category, Photo } from './styled';
import { Status } from 'parts/styled';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizations } from './duck/actions';
import {
  selectNormalizedOrganizations,
  selectPagination,
} from './duck/selectors';
import { IOrganizationTable } from './types';

function OrganizationsTable(props: IOrganizationTable) {
  const { onRowClick, hideControls, controls } = props;

  const dispatch = useDispatch();
  const organizations = useSelector(selectNormalizedOrganizations);
  const pagination = useSelector(selectPagination);

  useEffect(() => {
    dispatch(getOrganizations({ page: pagination.pageNumber || 0 }));
  }, []);

  const fields = [
    {
      primaryKey: true,
      label: 'ID',
      key: 'entityId',
      props: { textalign: 'center', width: '7%' },
    },
    {
      label: 'Фото',
      key: 'photos',
      props: { width: '7%' },
      getComponent: (url) => <Photo src={url} alt="" />,
    },
    {
      label: 'Название',
      key: 'name',
      sortable: true,
      props: { width: '10%' },
      getComponent: (text) => <OrgName>{text}</OrgName>,
    },
    {
      label: 'Партнер',
      key: 'partner',
      props: { width: '10%' },
      getComponent: (partner) => partner.firstName,
    },
    {
      label: 'Адрес',
      key: 'address',
      sortable: true,
      props: { width: '15%' },
      getComponent: (address) => <Address>{address}</Address>,
    },
    {
      label: 'Направление',
      key: 'eventType',
      filterType: 'select',
      align: 'center',
    },
    {
      label: 'Категория',
      key: 'directions',
      filterType: 'select',
      props: { width: '25%' },
      getComponent: (categories) => {
        console.log(categories)
        return categories.map(item => item.name).join(' , ')
      },
    },
    {
      label: 'Статус',
      key: 'status',
      sortable: true,
      filterType: 'select',
      props: { width: '10%' },
      getComponent: (status) => (
        <Status status={status === 'Активный' ? 'active' : 'disabled'}>
          {status}
        </Status>
      ),
    },
  ];

  return (
    <Table
      hideControls={hideControls}
      globalControls={controls}
      pagination={{
        ...pagination,
        method: (nextPage) => {
          dispatch(getOrganizations({ page: nextPage }));
        },
      }}
      onRowClick={onRowClick}
      fields={fields}
      items={organizations}
    />
  );
}
export default OrganizationsTable;
