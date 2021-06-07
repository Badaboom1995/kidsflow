import React from "react";
import { StatusSection } from "../styled";
import { Tariff, Status } from "parts/styled";

type ChildDataType = { name: string; surname: string };

export const StatusArea = ({
  tariff,
  status,
}: {
  tariff: string;
  status: string;
}) => (
  <StatusSection>
    <Tariff type="premium" style={{ marginRight: "10px" }}>
      {tariff}
    </Tariff>
    <Status status="active">{status}</Status>
  </StatusSection>
);
