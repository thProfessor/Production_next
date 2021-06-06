import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaBasketballBall, FaFacebookSquare } from "react-icons/fa";
import { Icon_margin, Flex_space_between } from "../styles/Profile_card_style";
import {  BsPlus } from "react-icons/bs";
import {
  Card__head_add,
  Card__head_add_title,
  Card__head_add_syb,
} from "../styles/Card";
function SocialMedia(props) {
  return (
    <div>
      <Flex_space_between>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Icon_margin>
            <a href={props.linkedin} style={{ color: "#0A66C2", fontSize: "25px" }}>
              <SiLinkedin />
            </a>
          </Icon_margin>
          <Icon_margin>
            <a href={props.link2} style={{ color: "#f33a5a", fontSize: "25px" }}>
              <FaBasketballBall />
            </a>
          </Icon_margin>
          <Icon_margin>
            <a href={props.facebook} style={{ color: "#0A66C2", fontSize: "25px" }}>
              <FaFacebookSquare />
            </a>
          </Icon_margin>
        </div>
        <Card__head_add onClick={props.addClick}>
          <Card__head_add_title>Add&nbsp;</Card__head_add_title>
          <Card__head_add_syb>
            <BsPlus />
          </Card__head_add_syb>
        </Card__head_add>
      </Flex_space_between>
    </div>
  );
}

export default SocialMedia;
