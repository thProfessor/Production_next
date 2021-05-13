import React, { useState } from "react";
import {
  CheckBox2,
  FilterHead,
  FilterOption,
  GoCheck2,
} from "./FilterComponentSchema";

function FilterComponent(props) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  return (
    <FilterHead className={`${props.className} `}>
      <FilterOption fontWeight={`${active ? "700" : "500"}`}>
        {props.name}
      </FilterOption>
      <CheckBox2
        backgroundColor={`${
          active ? "rgb(236, 31, 40)" : "rgb(233, 233, 233)"
        }`}
        onClick={() => {
          setActive(!active);
          setValue(props.name);
        }}
      >
        <GoCheck2 opacity={active ? 1 : 0} />
      </CheckBox2>
    </FilterHead>
  );
}

export default FilterComponent;
