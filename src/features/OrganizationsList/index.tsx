import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrganizationsListView from "./view";
import {
  selectSomeOrgs,
  selectWithFilter,
} from "ducks/organizations/selectors";
import { selectSearchFilter } from "ducks/filters/selectors";
import { chooseOrg } from "ducks/organizations/slice";

function OrganizationsList() {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const searchFilter = useSelector(selectSearchFilter);
  const filteredOrganization = useSelector(
    selectWithFilter("name", searchFilter)
  );

  const chooseOrgById = (id: string) => {
    dispatch(chooseOrg(id));
  };

  return (
    <OrganizationsListView
      items={filteredOrganization}
      chooseOrg={chooseOrgById}
      isOpen={isOpen}
      setOpen={setOpen}
    />
  );
}
export default OrganizationsList;
