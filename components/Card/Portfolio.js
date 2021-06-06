import React from "react";
import {
  Card__detail,
  Card__detail_content,
  Card__bold_text,
  Card__gray_text,
  Card__detail_img,
  Card__detail_btns,
  Card__head_edits_btns,
  Card__pink_text,
} from "../../styles/Card";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import Image from "next/image";

function PortfolioCard(props) {
  return (
    <Card__detail>
      <Card__detail_img>
        <Image src={props.cmpLogo} width={50} height={50} />
      </Card__detail_img>
      <Card__detail_content>
        <Card__pink_text>{props.industryType}</Card__pink_text> 
        <Card__bold_text>{props.industryName}</Card__bold_text>
        <Card__gray_text><a href="#">{props.link}</a></Card__gray_text>
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

export default PortfolioCard;
