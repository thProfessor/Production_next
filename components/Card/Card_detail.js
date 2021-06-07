import React from "react";
import {
  Card__detail,
  Card__detail_content,
  Card__pink_text,
  Card__bold_text,
  Card__dark_gray_text,
  Card__gray_text,
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
        <Image src={props.clgLogo} width={50} height={50} />
      </Card__detail_img>
      <Card__detail_content>
        <Card__pink_text>{props.typeOfDegree} </Card__pink_text>
        <Card__bold_text>{props.nameOfCollege}</Card__bold_text>
        <Card__dark_gray_text>{props.collegeLocation} </Card__dark_gray_text>
        <Card__gray_text>{props.period}</Card__gray_text>
        <Card__gray_text>{props.branch}</Card__gray_text>
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
