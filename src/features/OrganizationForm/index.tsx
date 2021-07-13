import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bootstrap } from "./duck/actions";
import { loadingSelector } from "./duck/selectors";
import organizationsService from "services/organizations";

import AddOrgView from "./view";
import { clearData } from "./duck/slice";

function AddOrg() {
  const dispatch = useDispatch();

  const [generalRef, setGeneral] = useState(null);
  const [contactsRef, setContacts] = useState(null);
  const [legalRef, setLegal] = useState(null);

  const { id }: { id: string } = useParams();
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(bootstrap(id));
    return () => {
      dispatch(clearData());
    };
  }, []);

  return (
    <>
      {loading ? (
        "...Загрузка"
      ) : (
        <AddOrgView
          organizationId={id}
          submitMethod={organizationsService[id ? "update" : "create"]}
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
