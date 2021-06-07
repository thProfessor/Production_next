import { React, useState } from "react";
import {
  Card__detail,
  Card__detail_content,
  Card__bold_text,
  Card__detail_img,
  Medium_text,
  Small_text,
  Display_flex,
  Display_flex_end,
  Small_gray_text_mr,
  Space_around,
  Short_card_border,
} from "../../styles/Card";
import { BiHomeHeart } from "react-icons/bi";
import { FiPlayCircle } from "react-icons/fi";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";

function AppliedCard(props) {
  const [fav, setFav] = useState(false);
  const favHandler = () => {
    setFav((prevstate) => {
      return !prevstate;
    });
  };
  return (
    <Short_card_border className="card">
      <Card__detail>
        <Card__detail_img>
          <Image src={props.cmpLogo} width={50} height={50} />
        </Card__detail_img>
        <Card__detail_content>
          <Space_around>
            <Display_flex>
              <Card__bold_text>{props.category}</Card__bold_text>
              {props.wfh ? (
                <Small_text>
                  <BiHomeHeart
                    style={{
                      color: "#F26A7E",
                      fontSize: "20px",
                      marginRight: "5px",
                      marginRight: "5px",
                      paddingBottom: "3px"
                    }}
                  />
                  Work From Home
                </Small_text>
              ) : null}
            </Display_flex>
            <span
              style={{
                color: "#F26A7E",
                fontSize: "20px",
                marginRight: "30px",
                marginLeft: "10px",
              }}
            >
              {fav ? (
                <FaHeart onClick={favHandler} />
              ) : (
                <FaRegHeart onClick={favHandler} />
              )}
            </span>
          </Space_around>
          <Medium_text>{props.company}</Medium_text>
          <Display_flex>
            <Small_text>
              <FiPlayCircle style={{ color: " #A9ACCB", marginRight: "5px" }} />
              {props.startDate}
            </Small_text>
            <Small_text>
              <RiWallet3Line
                style={{ color: " #A9ACCB", marginRight: "5px" }}
              />
              {props.stiphend}INR
            </Small_text>
            <Small_text>
              <AiOutlineCalendar
                style={{ color: " #A9ACCB", marginRight: "5px" }}
              />
              {props.period}
            </Small_text>
            <Small_text>
              <AiOutlineCalendar
                style={{ color: " #A9ACCB", marginRight: "5px" }}
              />
              {props.endDate}
            </Small_text>
          </Display_flex>
          <Display_flex_end>
            <Small_gray_text_mr>{props.posted}</Small_gray_text_mr>
            <Small_gray_text_mr>{props.noOfApplied}</Small_gray_text_mr>
            <Small_gray_text_mr
              style={{ fontSize: "15px", marginBottom: "2px" }}
            >
              View Detail
              <>
                <MdNavigateNext
                  style={{ color: "#F26A7E", fontSize: "20px" }}
                />
              </>
            </Small_gray_text_mr>
          </Display_flex_end>
        </Card__detail_content>
      </Card__detail>
    </Short_card_border>
  );
}

export default AppliedCard;
