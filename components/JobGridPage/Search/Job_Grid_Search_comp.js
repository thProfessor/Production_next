import React from "react";
import Grid_Select_drpdwn from "../Dropdown/Grid_Select_drpdwn";

import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { textColors } from "../../../styles/pallete";
const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];

const Job_Grid_Search_comp = () => {
  return (
    <Form action="/">
      <FilterSearch>
        <FilterInput>
          <SearchBar className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
            <InputSearch
              className="form-control focus-reset pl-13"
              type="text"
              id="keyword"
              placeholder="UI Designer"
            />
            <IconSearch
              color={textColors.subheading}
              className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"
            >
              <BsSearch />
            </IconSearch>
          </SearchBar>
          {/* <!-- .select-city starts --> */}
          <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
            <Grid_Select_drpdwn
              options={defaultCountries}
              className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
              border={false}
            />

            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
              <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
            </span>
          </div>
          {/* <!-- ./select-city ends --> */}
        </FilterInput>
        <div className="button-block">
          <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
            Search
          </button>
        </div>
      </FilterSearch>
    </Form>
  );
};

export default Job_Grid_Search_comp;

const Form = styled.form``;
const FilterSearch = styled.div`
  display: flex;
  width: 97%;
  margin: 0 auto;
  font-family: "Gordita";
  box-shadow: 0 29px 75px hsl(0deg 0% 60% / 25%);
  border: 1px solid #ddd;
  background-color: #fff !important;
  border-radius: 0.2rem !important;
`;
const FilterInput = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-items: center;
  align-items: center;
`;
const SearchBar = styled.div`
  margin-bottom: 0;
  width: 50%;
  border-right: 1px solid #e5e5e5;
  border-bottom: 0;
  position: relative !important;
`;
const InputSearch = styled.input`
  width: 100%;
  border: 0;
  height: 40px;
  color: #6b6e6f;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
const IconSearch = styled.span`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 1.3125rem;
  line-height: 1.62;
  letter-spacing: -0.21px;
  color: ${(props) => props.color};
  font-family: "Gordita";
  height: 100% !important;
  align-items: center;
  justify-content: center;
  display: flex;
`;
