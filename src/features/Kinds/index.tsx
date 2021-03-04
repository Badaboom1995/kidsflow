import React, { useEffect } from "react";
import KindsView from "./view";
import { useDispatch, useSelector } from "react-redux";
import { loadKinds } from "./duck/actions";
import { RootState } from "app";

function Kinds() {
  const dispatch = useDispatch();
  const kinds = useSelector((state: RootState) => state.kinds.entities);
  const isLoad = useSelector((state: RootState) => state.kinds.loading);
  useEffect(() => {
    dispatch(loadKinds());
  }, [dispatch]);
  return <KindsView kinds={kinds} isLoad={isLoad} />;
}
export default Kinds;
