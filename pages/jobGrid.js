import Head from "next/head";
import styled from "styled-components";
import { CollegeSectionFilters } from "../components/JobGridPage/FilterScheme/FilterSchema";
import FilterScheme from "../components/JobGridPage/FilterScheme/FilterScheme";
import Job_Grid_Search_comp from "../components/JobGridPage/Search/Job_Grid_Search_comp";
import SliderCharts from "../components/JobGridPage/SliderChart/Slider_charts";
export const Filters = [
  {
    sr: 1,
    name: "Job Type",
    filters: [
      { name: "Full" },
      { name: "Part Contract" },
      { name: "Internship" },
      { name: "Temporary" },
    ],
  },
  {
    sr: 2,
    name: "Experience Level",
    filters: [
      { name: "All" },
      { name: "Senior" },
      { name: "Mid" },
      { name: "Junior" },
    ],
  },
  {
    sr: 3,
    name: "Posted Time",
    filters: [
      { name: "Any time" },
      { name: "Last Day" },
      { name: "Last 3 days" },
      { name: "Last week" },
    ],
  },
];

export default function JobGrid() {
  return (
    <>
      <Head>
        <title>JobGrid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CollegeSectionFilters>
        <FilterScheme
          sr={Filters[0].sr}
          name={Filters[0].name}
          options={Filters[0].filters}
          activeBG={true}
        />
      </CollegeSectionFilters>

      <SliderCharts />

      <CollegeSectionFilters>
        <FilterScheme
          sr={Filters[1].sr}
          name={Filters[1].name}
          options={Filters[1].filters}
          activeBG={true}
        />
      </CollegeSectionFilters>

      <CollegeSectionFilters>
        <FilterScheme
          sr={Filters[2].sr}
          name={Filters[2].name}
          options={Filters[2].filters}
          activeBG={true}
        />
      </CollegeSectionFilters>

      <Job_Grid_Search_comp />
    </>
  );
}
