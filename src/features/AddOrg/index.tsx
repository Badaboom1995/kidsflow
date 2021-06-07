import { selectOrganizationById } from "pages/Orgs/duck/selectors";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import organizationsService from "services/organizations";

import AddOrgView from "./view";

function AddOrg() {
  const [formRefs, setFormRefs] = useState({
    general: null,
    contacts: null,
    legal: null,
  });

  const { id }: any = useParams();
  const rawData = useSelector(selectOrganizationById(id));
  // prettier-ignore
  const { organizationId, about, name, ageFrom, ageTo, partner, address, phoneNumber, email, site} = rawData || {};

  const initialData = {
    id: organizationId,
    general: {
      about,
      name,
      directions: "",
      category: "",
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
    legal: "",
    partner: rawData?.partner.partnerId,
  };

  const [partners, setPartners] = useState(null);

  useEffect(() => {
    organizationsService.partnersList().then((result) => {
      setPartners(
        result.data.list.map((item) => ({
          name: item.partner.firstName,
          value: item.partner.partnerId,
        }))
      );
    });
  }, []);

  return <AddOrgView partners={partners} initialData={initialData} />;
}
export default AddOrg;
