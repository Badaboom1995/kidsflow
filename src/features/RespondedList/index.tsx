import React from "react";
import RespondedListView from "./view";

export interface IRespondedList {
  isVisible: boolean;
  changeVisibility: () => void;
}
function RespondedList(props: IRespondedList) {
  return <RespondedListView {...props} />;
}
export default RespondedList;
