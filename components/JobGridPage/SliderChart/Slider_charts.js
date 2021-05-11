import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import styled from "styled-components";
import { textColors } from "../../../styles/pallete.js";
import styles from "./SliderChart.module.css";
const STEP = 1;
const MIN = 50;
const MAX = 180;

const Slider_charts = () => {
  const [rangeValues, setRangeValues] = useState([70, 150]);
  return (
    <Wrapper>
      <FlexContainer>
        <SalaryText color={textColors.subheading}>Salary Range</SalaryText>
        {/* <!-- Range Slider --> */}

        <Price>
          <PriceText>
            ${rangeValues[0].toFixed()} - {rangeValues[1].toFixed()}K
          </PriceText>
        </Price>
      </FlexContainer>
      <Graph className={styles.graph}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Graph>
      <Wrapper>
        <>
          <Range
            values={rangeValues}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => {
              setRangeValues(values);
            }}
            renderTrack={({ props, children }) => (
              <SliderButton
                role="button"
                tabIndex={0}
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
              >
                <SliderHeight
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",

                    background: getTrackBackground({
                      values: rangeValues,
                      colors: ["#ccc", "#EC1F28", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </SliderHeight>
              </SliderButton>
            )}
            renderThumb={({ props, isDragged }) => <Drag {...props}></Drag>}
          />
        </>
      </Wrapper>
    </Wrapper>
  );
};

export default Slider_charts;

const Wrapper = styled.div``;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SalaryText = styled.h4`
  font-size: 1.3125rem;
  line-height: 1.62;
  letter-spacing: -0.21px;
  color: ${(props) => props.color};
  font-family: "Gordita";
  width: 75% !important;
`;
const Price = styled.div`
  white-space: nowrap;
`;
const PriceText = styled.span`
  font-weight: 700 !important;
  color: "#007bff";
  white-space: nowrap;
`;
const Graph = styled.div`
  min-width: 290px;
  max-width: 290px;
  left: 0;
  top: 14px;
  position: relative !important;
  text-align: center;
  margin-top: 3rem;
  margin-left: 0;
  margin-right: 0;
`;
const SliderButton = styled.div`
  transform: scale(1);
  cursor: inherit;
  display: flex;
`;
const SliderHeight = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    rgb(204, 204, 204) 0%,
    rgb(204, 204, 204) 15.3846%,
    rgb(236, 31, 40) 15.3846%,
    rgb(236, 31, 40) 76.9231%,
    rgb(204, 204, 204) 76.9231%,
    rgb(204, 204, 204) 100%
  );
  align-self: center;
`;

const Drag = styled.div`
  position: absolute;
  z-index: 0;
  cursor: grab;
  user-select: none;
  touch-action: none;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(548.171px, -6px);
  &:focus {
    outline: none !important;
  }
`;
