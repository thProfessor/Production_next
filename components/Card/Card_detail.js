import React from "react";
import {
  Card__detail,
  Card__detail_content,
  Card__detail_degree,
  Card__detail_college,
  Card__detail_clg_city,
  Card__detail_branch,
  Card__detail_img,
  Card__detail_btns,
  Card__head_edits_btns,
} from "../../styles/Card";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import Image from "next/image";

function CardDetail(props) {
  return (
    <Card__detail>
      <Card__detail_img>
        <Image src={props.clgLogo} width={80} height={80} />
      </Card__detail_img>
      <Card__detail_content>
        <Card__detail_degree>{props.typeOfDegree} </Card__detail_degree>
        <Card__detail_college>{props.nameOfCollege}</Card__detail_college>
        <Card__detail_clg_city>{props.collegeLocation} </Card__detail_clg_city>
        <Card__detail_branch>{props.period}</Card__detail_branch>
        <Card__detail_branch>{props.branch}</Card__detail_branch>
      </Card__detail_content>
      <Card__detail_btns>
        <Card__head_edits_btns>
          <BsPencil />
        </Card__head_edits_btns>
        <Card__head_edits_btns>
          <RiDeleteBin7Line />
        </Card__head_edits_btns>
      </Card__detail_btns>
    </Card__detail>
  );
}

export default CardDetail;
