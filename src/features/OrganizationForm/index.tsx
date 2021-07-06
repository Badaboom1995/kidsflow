import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bootstrap } from "./duck/actions";
import { currentOrganizationSelector, loadingSelector } from "./duck/selectors";

import AddOrgView from "./view";

function AddOrg() {
  const dispatch = useDispatch();

  const [generalRef, setGeneral] = useState(null);
  const [contactsRef, setContacts] = useState(null);
  const [legalRef, setLegal] = useState(null);

  const { id }: { id: string } = useParams();
  const rawData = useSelector(currentOrganizationSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(bootstrap(id));
  }, []);

  const { organizationId } = rawData || {};

  return (
    <>
      {loading ? (
        "...Загрузка"
      ) : (
        <AddOrgView
          organizationId={organizationId}
          formRefs={{
            general: generalRef,
            contacts: contactsRef,
            legal: legalRef,
          }}
          setFormRef={{
            general: setGeneral,
            contacts: setContacts,
            legal: setLegal,
          }}
        />
      )}
    </>
  );
}
export default AddOrg;
