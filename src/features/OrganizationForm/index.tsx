import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bootstrap } from "./duck/actions";
import { currentOrganizationSelector, loadingSelector } from "./duck/selectors";

import AddOrgView from "./view";

function AddOrg() {
  const dispatch = useDispatch();

  const [formRefs, setFormRef] = useState({
    general: null,
    contacts: null,
    legal: null,
  });

  const { id }: any = useParams();
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
          formRefs={formRefs}
          setFormRef={setFormRef}
        />
      )}
    </>
  );
}
export default AddOrg;
