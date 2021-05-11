import React, { useState, useEffect } from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  AnimateDiv,
  FilterDiv,
  ReadMoreLink,
  SchemeHead,
  UnderlineSpan,
} from "./FilterSchema";

function FilterScheme(props) {
  const isActiveNeeded = props.activeBG != undefined ? true : false;
  const [readMore, setReadMore] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  // content of show less....
  const ExtraContent = (temp_props) => {
    return (
      <AnimateDiv>
        {temp_props.more_filters.map((option) => (
          <FilterComponent
            className="mb-2 mt-1"
            name={option.name}
            value={option.value}
          />
        ))}
      </AnimateDiv>
    );
  };
  const linkName = readMore
    ? "Read Less"
    : `${props.more_filters != undefined && props.more_filters.length} more`;
  const toggleFilterOpen = () => {
    if (filterOpen) {
      setReadMore(false);
    }
    setFilterOpen(!filterOpen);
  };
  //  Every Filter Component called here....
  return (
    <FilterDiv
      key={props.sr}
      background={`${isActiveNeeded && filterOpen && "act"}`}
    >
      <SchemeHead onClick={toggleFilterOpen}>
        {props.name}
        {filterOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </SchemeHead>

      {
        <div
          style={{
            paddingBottom: "10px",
            display: !filterOpen ? "none" : "unset",
          }}
        >
          {props.options.map((option) => (
            <FilterComponent
              className="mb-2 mt-1"
              name={option.name}
              value={option.value}
            />
          ))}
          {readMore && props.more_filters != undefined && (
            <ExtraContent more_filters={props.more_filters} />
          )}
          <ReadMoreLink
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            <UnderlineSpan>
              {props.more_filters != undefined && linkName}
            </UnderlineSpan>
          </ReadMoreLink>
        </div>
      }
    </FilterDiv>
  );
}

export default FilterScheme;
