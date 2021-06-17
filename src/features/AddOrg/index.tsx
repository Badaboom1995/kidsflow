import { selectOrganizationById } from "pages/Orgs/duck/selectors";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import organizationsService from "services/organizations";
import { directions, getAge, getSchedule } from "config/constants";

import AddOrgView from "./view";

function AddOrg() {
  const [formRefs, setFormRef] = useState({
    general: null,
    contacts: null,
    legal: null,
  });

  const { id }: any = useParams();
  const rawData = useSelector(selectOrganizationById(id));
  const {
    organizationId,
    about,
    name,
    ageFrom,
    ageTo,
    partner,
    address,
    phoneNumber,
    email,
    site,
    eventCategories,
    eventTypes,
    entity,
    accountNumber,
    taxIdNumber,
    primaryStateNumber,
    legalAddress,
  } = rawData || {};
  const initialData = {
    general: {
      about,
      name,
      directions: eventTypes ? eventTypes[0] : "",
      category: eventCategories ? eventCategories[0] : "",
      businessHours: "",
      ageFrom: ageFrom?.toString(),
      ageTo: ageTo?.toString(),
      partnerId: partner?.partnerId,
    },
    contacts: {
      address,
      phoneNumber,
      email,
      site,
    },
    legal: {
      entity,
      accountNumber,
      taxIdNumber,
      primaryStateNumber,
      legalAddress,
    },
  };

  useEffect(() => {
    organizationsService.partnersList().then((result) => {});
  }, []);

  return (
    <AddOrgView
      initialData={rawData ? initialData : null}
      organizationId={organizationId}
      formRefs={formRefs}
      setFormRef={setFormRef}
    />
  );
}
export default AddOrg;
