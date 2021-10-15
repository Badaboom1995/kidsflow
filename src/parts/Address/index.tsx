import React, { useState, useEffect } from "react";
import { Wrapper } from "./styled";
import Search from "parts/Search";
import geoService from "services/geo";

function Address() {
  const [prompts, setPrompts] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const prompts = geoService.getSuggest(value);
    prompts.then((values) => {
      setPrompts(
        values.data.map((item) => ({
          name: item.value,
          value: `${item.data.geo_lat} ${item.data.geo_lon}`,
        }))
      );
    });
  }, [value]);

  return (
    <Wrapper>
      <Search
        name="address"
        label="Адрес"
        prompts={prompts}
        onChange={(value) => {
          setValue(value);
        }}
        onChoose={(item) => {
          setPrompts([]);
        }}
      />
    </Wrapper>
  );
}
export default Address;
