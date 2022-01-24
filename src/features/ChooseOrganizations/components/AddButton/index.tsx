import React, { useState } from 'react';
import { AddOrgButton, ChooseOrgWrapper } from './styled';
import plus from 'assets/plus.svg';
import OrganizationsTable from 'features/OrganizationsTable';
import Modal from 'parts/Modal';
import { addOrganizations } from 'features/ChooseOrganizations/duck/slice';
import { useDispatch } from 'react-redux';

function AddButton() {
  const [isOrgsVisible, setOrgsVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <AddOrgButton onClick={() => setOrgsVisible(!isOrgsVisible)}>
        <img src={plus} alt="" />
        Добавить организации
      </AddOrgButton>
      <Modal isVisible={isOrgsVisible} changeVisibility={setOrgsVisible}>
        <ChooseOrgWrapper>
          <OrganizationsTable
            hideControls
            controls={[
              {
                buttonName: 'Добавить организации',
                method: (organizations) => {
                  dispatch(addOrganizations(organizations));
                  console.log(organizations);
                },
              },
              {
                buttonName: 'Удалить',
                method: (organizations) => {
                  setOrgsVisible(false);
                },
              },
            ]}
          />
        </ChooseOrgWrapper>
      </Modal>
    </div>
  );
}
export default AddButton;
