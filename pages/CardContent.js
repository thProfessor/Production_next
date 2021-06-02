import React from "react";
import Card from "../components/Card/Card";
import CardDetails from '../components/Card/Card_detail';
import {Education} from '../public/data/Dum_data';
import { BsBook } from "react-icons/bs";
import CardOuter from "../components/Card/Card";


function CardContent() {

  const AddDetail = ()=>{console.log("clicked")}
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
      <CardOuter title="Education" icon={<BsBook/>} addClick={AddDetail}>
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
  );
}

export default CardContent;
