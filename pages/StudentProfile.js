import { React, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Scrollbars } from "react-custom-scrollbars";
import CardDetails from "../components/Card/Card_detail";
import {
  Education,
  Experience,
  Achivement,
  savedInternships,
  appliedInternships,
  Portfolio,
} from "../public/data/Dum_data";
import { BsBook } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FiBriefcase, FiAward, FiFolder } from "react-icons/fi";
import {
  Card__pink_text,
  Card__head_edits_btns,
  Display_flex_end,
  Display_flex,
  Margin_layout,
  Width70,
  Width30,
  Card__gray_text,
  Cards_navigaton,
  Cards_nav_heads,
  Justify_center,
  Pink_btn,
} from "../styles/Card";
import CardOuter from "../components/Card/Card";
import ExperienceDetail from "../components/Card/Experience_detail";
import AchivmentsDetails from "../components/Card/Achivement_detail";
import Profil_card from "../components/Card/Profile_card";
import Short_card from "../components/Card/SavedInternships";
import Applied_card from "../components/Card/AppliedInterships";
import PortfolioCard from "../components/Card/Portfolio";


function StudentProfile() {
  const [bin, setBin] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [activeSection, setActiveSection] = useState("Profile");
  const navBarHandler = (e) => {
    setActiveSection(e.target.innerText);
  };
  const binHandler = () => {
    setBin((prevstate) => {
      return !prevstate;
    });
  };
  const selectAllHandler = () => {
    setSelectAll((prevstate) => {
      return !prevstate;
    });
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: "#C9CBE2",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const CustomScrollbars = (props) => (
    <Scrollbars
      renderThumbVertical={renderThumb}
      style={{ width: "100%", height: "1000px" }}
      {...props}
    />
  );

  const emptyFunction = () => {
    console.log("clicked");
  };
  return (
    <div style={{ marginTop: "50px" }}>
      {" "}
      {/*This margin is for temporary remove it once navBar is done*/}
      <Margin_layout>
        <Display_flex>
          <Width30>
            <Profil_card showPercentage={activeSection === "Profile"} />
          </Width30>
          <Width70>
            <Justify_center>
              <Cards_navigaton>
                <Cards_nav_heads onClick={navBarHandler}>
                  Profile
                </Cards_nav_heads>
                <Cards_nav_heads onClick={navBarHandler}>
                  Applied Internships
                </Cards_nav_heads>
                <Cards_nav_heads onClick={navBarHandler}>
                  Saved Internships
                </Cards_nav_heads>
              </Cards_navigaton>
            </Justify_center>
            {activeSection === "Profile" && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                    marginBottom: "25px",
                  }}
                >
                  <CardOuter
                    title="Education"
                    icon={<BsBook />}
                    addClick={emptyFunction}
                  >
                    {Education.details.map((data) => {
                      return (
                        <CardDetails
                          typeOfDegree={data.typeOfDegree}
                          nameOfCollege={data.nameOfCollege}
                          collegeLocation={data.collegeLocation}
                          period={data.period}
                          branch={data.branch}
                          clgLogo={data.clgLogo}
                        ></CardDetails>
                      );
                    })}
                  </CardOuter>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                    marginBottom: "25px",
                  }}
                >
                  <CardOuter
                    title="Experience"
                    icon={<FiBriefcase />}
                    addClick={emptyFunction}
                  >
                    <div style={{ width: "50%", marginLeft: "18%" }}>
                      <Card__pink_text>Job titles</Card__pink_text>
                    </div>
                    {Experience.details.map((data) => {
                      console.log(data.company);
                      return (
                        <ExperienceDetail
                          company={data.company}
                          category={data.category}
                          location={data.location}
                          period={data.period}
                          workDescription={data.workDescription}
                          cmpLogo={data.cmpLogo}
                        ></ExperienceDetail>
                      );
                    })}
                  </CardOuter>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                    marginBottom: "25px",
                  }}
                >
                  <CardOuter
                    title="Achivement"
                    icon={<FiAward />}
                    addClick={emptyFunction}
                  >
                    <div style={{ width: "50%", marginLeft: "18%" }}>
                      <Card__pink_text>
                        Awards/ Special Mentions
                      </Card__pink_text>
                    </div>
                    {Achivement.details.map((data) => {
                      console.log(data.company);
                      return (
                        <AchivmentsDetails
                          company={data.company}
                          description={data.description}
                          year={data.year}
                          location={data.location}
                          cmpLogo={data.cmpLogo}
                        ></AchivmentsDetails>
                      );
                    })}
                  </CardOuter>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                    marginBottom: "25px",
                  }}
                >
                  <CardOuter
                    title="Portfolio"
                    icon={<FiFolder />}
                    addClick={emptyFunction}
                  >
                    {Portfolio.details.map((data) => {
                      console.log(data.company);
                      return (
                        <PortfolioCard
                          industryType={data.industryType}
                          industryName={data.industryName}
                          link={data.link}
                          cmpLogo={data.cmpLogo}
                        ></PortfolioCard>
                      );
                    })}
                  </CardOuter>
                </div>
              </>
            )}
            {activeSection === "Applied Internships" && (
              <div
                style={{
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                <CustomScrollbars
                  autoHide
                  autoHideTimeout={500}
                  autoHideDuration={20}
                >
                  {savedInternships.details.map((data) => {
                    console.log(data.company);
                    return (
                      <Short_card
                        company={data.company}
                        category={data.category}
                        wfh={data.wfh}
                        startDate={data.startDate}
                        stiphend={data.stiphend}
                        period={data.period}
                        endDate={data.endDate}
                        cmpLogo={data.cmpLogo}
                        posted={data.posted}
                        noOfApplied={data.noOfApplied}
                      ></Short_card>
                    );
                  })}
                </CustomScrollbars>
              </div>
            )}
            {activeSection === "Saved Internships" && (
              <>
                <Display_flex_end>
                  {bin ? (
                    <>
                      <Checkbox
                        checked={selectAll}
                        onChange={selectAllHandler}
                        inputProps={{ "aria-label": "primary checkbox" }}
                        label="Select All"
                      ></Checkbox>
                      &nbsp;
                      <Card__gray_text
                        style={{
                          marginTop: "10px",
                          marginBottom: "0px",
                          paddingTop: "2px",
                        }}
                      >
                        Select All&nbsp;
                      </Card__gray_text>
                    </>
                  ) : null}
                  <Card__head_edits_btns onClick={binHandler}>
                    <RiDeleteBin7Line />
                  </Card__head_edits_btns>
                </Display_flex_end>
                <CustomScrollbars
                  autoHide
                  autoHideTimeout={500}
                  autoHideDuration={20}
                >
                  {appliedInternships.details.map((data) => {
                    return (
                      <Applied_card
                        company={data.company}
                        category={data.category}
                        wfh={data.wfh}
                        startDate={data.startDate}
                        stiphend={data.stiphend}
                        period={data.period}
                        cmpLogo={data.cmpLogo}
                        interType={data.interType}
                        noOfApplied={data.noOfApplied}
                        showRemoveBin={bin}
                      ></Applied_card>
                    );
                  })}
                </CustomScrollbars>
                {bin ? (
                  <Display_flex_end style={{ margin: "30px 5% 30px auto" }}>
                    <Pink_btn onClick={emptyFunction}>Delete</Pink_btn>
                  </Display_flex_end>
                ) : null}
              </>
            )}
          </Width70>
        </Display_flex>
      </Margin_layout>
    </div>
  );
}

export default StudentProfile;
