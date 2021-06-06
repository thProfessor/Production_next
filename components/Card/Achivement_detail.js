import React from "react";
import {
  Card__detail,
  Card__detail_content,
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

function AchivementDetail(props) {
  return (
    <Card__detail>
      <Card__detail_img>
        <Image src={props.cmpLogo} width={50} height={50} />
      </Card__detail_img>
      <Card__detail_content>
        <Card__bold_text>{props.company}</Card__bold_text>
        <Card__gray_text>{props.description}</Card__gray_text>
        <Card__gray_text>{props.year}</Card__gray_text>
        <Card__dark_gray_text>{props.location} </Card__dark_gray_text>
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

export default AchivementDetail;
