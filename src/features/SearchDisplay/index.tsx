import React from "react";
import { useSelector } from "react-redux";
import SearchDisplayView from "./view";
import { RootState } from "app";

function SearchDisplay() {
  const kinds = useSelector((state: RootState) => state.kinds.entities);
  return <SearchDisplayView kinds={kinds} />;
}
export default SearchDisplay;
