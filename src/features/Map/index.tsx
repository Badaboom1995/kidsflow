import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Wrapper, Pin, PinTitle } from "./styled";
import DG from "2gis-maps";
import sportPin from "./assets/sport.svg";
import { useDispatch, useSelector } from "react-redux";
import { getOrganizationsInView } from "ducks/organizations/actions";
import { selectAllOrgs, selectWithFilter } from "ducks/organizations/selectors";
import { OrganizationType } from "ducks/organizations/types";
import { chooseOrg, setActive } from "ducks/organizations/slice";

function Map() {
  const dispatch = useDispatch();
  const orgs: OrganizationType[] = useSelector(selectAllOrgs);
  const choosedOrg: OrganizationType = useSelector(
    selectWithFilter("choosed", "true")
  )[0];

  const [map, setMap] = useState(null);
  // TODO. create map type
  const addOrgToMap = (org: OrganizationType, map: any) => {
    const iconHtml = (
      <Pin>
        <PinTitle>{org.name}</PinTitle>
        <img src={sportPin} alt="" />
      </Pin>
    );
    var myIcon = DG.divIcon({
      html: ReactDOMServer.renderToString(iconHtml),
      className: "",
      iconUrl: sportPin,
      iconRetinaUrl: sportPin,
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });
    const marker = DG.marker([org.lat, org.lon], {
      icon: myIcon,
    });
    marker.addTo(map);
    marker.on("click", (e) => {
      dispatch(chooseOrg(org.id));
    });
  };

  useEffect(() => {
    if (map && choosedOrg) {
      map.setView({ lat: choosedOrg.lat, lon: choosedOrg.lon }, 16);
    }
  }, [choosedOrg, map]);

  useEffect(() => {
    if (!map) {
      const mapContainer = DG.map("map", {
        center: [55.75, 37.62],
        zoom: 13,
        scrollWheelZoom: false,
      });
      setMap(mapContainer);
      dispatch(getOrganizationsInView(mapContainer));
      mapContainer.on("zoomend", () => {
        dispatch(getOrganizationsInView(mapContainer));
      });
      mapContainer.on("moveend", () => {
        dispatch(getOrganizationsInView(mapContainer));
      });
      return;
    }
    orgs
      .filter((item) => !item.active)
      .forEach((item) => {
        dispatch(setActive(item.id));
        addOrgToMap(item, map);
      });
  }, [orgs, dispatch, map]);

  useEffect(() => {
    if (map) {
      orgs.forEach((item) => {
        dispatch(setActive(item.id));
        addOrgToMap(item, map);
      });
    }
  }, [map]);

  return <Wrapper id="map"></Wrapper>;
}
export default Map;
