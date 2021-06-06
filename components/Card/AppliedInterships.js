import { React, useState } from "react";
import {
  Card__detail,
  Card__detail_content,
  Card__bold_text,
  Card__detail_img,
  Medium_text,
  Xsmall_text,
  Display_flex,
  Display_flex_end,
  Small_gray_text_mr,
  Space_around,
  Short_card_applied,
} from "../../styles/Card";
import { BiHomeHeart,BiBriefcase } from "react-icons/bi";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineCalendar,AiOutlineUser } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import Checkbox from "@material-ui/core/Checkbox";


function AppliedCard(props) {
  const [fav, setFav] = useState(false);
  const [remove, setRemove] = useState(false);

  const favHandler = () => {
    setFav((prevstate) => {
      return !prevstate;
    });
  };
  const removeHandler = () => {
    setRemove((prevstate) => {
      return !prevstate;
    });
  };

  return (
    <Display_flex>  
    <Short_card_applied className="card">
      <Card__detail>
        <Card__detail_img>
          <Image src={props.cmpLogo} width={50} height={50} />
        </Card__detail_img>
        <Card__detail_content>
          <Space_around>
            <Display_flex>
              <Card__bold_text>{props.category}</Card__bold_text>
              {props.wfh ? (
                <Xsmall_text>
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
                </Xsmall_text>
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
          <Xsmall_text>
              <AiOutlineUser
                style={{ color: " #A9ACCB", marginRight: "5px" }}
              />
              {props.noOfApplied}
            </Xsmall_text>
            <Xsmall_text>
              <AiOutlineCalendar style={{ color: " #A9ACCB", marginRight: "5px" }} />
              {props.startDate}
            </Xsmall_text>
            <Xsmall_text>
              <BiBriefcase
                style={{ color: " #A9ACCB", marginRight: "5px" }}
              />
              {props.interType}
            </Xsmall_text>
            <Xsmall_text>
              <AiOutlineCalendar
                style={{ color: " #A9ACCB", marginRight: "5px" }}
              />
              {props.period}
            </Xsmall_text>
            <Xsmall_text>
              <RiWallet3Line
                style={{ color: " #A9ACCB", marginRight: "5px" }}
              />
              {props.stiphend}INR
            </Xsmall_text>
            
          </Display_flex>
          <Display_flex_end>
            <Small_gray_text_mr>{props.posted}</Small_gray_text_mr>
             <Small_gray_text_mr
              style={{ fontSize: "15px", marginBottom: "15px" }}
            >
              	Review application  
              <>
                <MdNavigateNext
                  style={{ color: "#F26A7E", fontSize: "20px" }}
                />
              </>
            </Small_gray_text_mr>
          </Display_flex_end>
        </Card__detail_content>
      </Card__detail>
    </Short_card_applied>
    {
        props.showRemoveBin?(<span><Checkbox
            checked={remove}
            onChange={removeHandler}
            inputProps={{ "aria-label": "primary checkbox" }}
          /></span>):null
    }
    {console.log({remove})}
    
    </Display_flex>
  );
}

export default AppliedCard;
