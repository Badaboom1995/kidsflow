import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDirections, getCategories, getPartners } from "ducks/dicts/actions";
import { Wrapper } from "./styled";
import EventsAddView from "./view";
import { useParams } from "react-router-dom";
import { getEventById } from "./duck/actions";
import { selectCurrentEvent, selectLoading } from "./duck/selectors";

function EventsAdd() {
  const { id }: { id: string } = useParams();

  const dispatch = useDispatch();
  const currentEvent = useSelector(selectCurrentEvent);
  const isLoading = useSelector(selectLoading);
  const RawPrompts = ["(1) one", "(2) two", "(3) three"];

  const [prompts, setPrompts] = useState<string[]>([]);

  const getSearchPrompts = (searchString: string) => {
    setPrompts(
      RawPrompts.filter((item) =>
        searchString ? item.includes(searchString) : false
      )
    );
  };
  console.log(currentEvent);
  useEffect(() => {
    id && dispatch(getEventById(id));
    dispatch(getDirections());
    dispatch(getCategories());
    dispatch(getPartners());
  }, []);

  return (
    <Wrapper>
      <EventsAddView
        prompts={prompts}
        getSearchPrompts={getSearchPrompts}
        currentEvent={currentEvent}
        isLoading={isLoading}
      />
    </Wrapper>
  );
}
export default EventsAdd;
