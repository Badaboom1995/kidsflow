import React from "react";
import NavigationView from "./view";

export interface INavigation {
  closed?: boolean;
  toggle: () => void;
}
function Navigation(props: INavigation) {
  return <NavigationView {...props} />;
}
export default Navigation;
