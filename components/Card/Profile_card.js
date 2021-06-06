import { React, useState } from "react";
import Image from "next/image";
import { BsPencil } from "react-icons/bs";
import { Card__head_edits_btns, Line, Xsmall_text } from "../../styles/Card";
import {
  Card__pink_text_h3,
  Text_left,
  Flex_col,
  Flex_space_between,
  Normal_text,
  Profile_bold_text,
  About_text,
  Image_relative,
  Image_edit,
  Image_relative_inside,
  ProfileImg_adj,
  Profile_card,
  ProfileSm_text,
  Percentage_bar
} from "../../styles/Profile_card_style";
import SocialIcons from "../SocialMedia";
import ProgressBar from "react-percent-bar";

function Profil_card(props) {
  const editImage = () => {};

  const [percent, updatePercent] = useState(65);

  // const updatePercent = () => {
  //   // update the progress bar percentage
  //   updatePercent(percent === 100 ? 25 : percent + 25);
  // };
  return (
    <Profile_card className="card">
      <Text_left>
        <ProfileImg_adj>
          <Image_relative>
            <Image_relative_inside>
              <Image src="/face.jpg" width={150} height={150} />
            </Image_relative_inside>
            <Image_edit onClick={editImage}>
              <BsPencil />
            </Image_edit>
          </Image_relative>
        </ProfileImg_adj>
        {props.showPercentage ? (
          <Percentage_bar
          >
            <ProgressBar
              fillColor="#f26a7e"
              percent={percent}
              style={{ width: "260px", margin: "5px", width: "85% !important" }}
            />
            <ProfileSm_text>&nbsp;&nbsp;{percent}%</ProfileSm_text>
          </Percentage_bar>
        ) : null}
        <Card__pink_text_h3>Nayanika Chatterjee</Card__pink_text_h3>
        <Profile_bold_text>Product Designer</Profile_bold_text>
        <Flex_col>
          <Flex_space_between>
            <Normal_text>7989390524</Normal_text>
            <Card__head_edits_btns>
              <BsPencil />
            </Card__head_edits_btns>
          </Flex_space_between>
          <Flex_space_between>
            <Normal_text>Cnayanika172066_...@gmail.com</Normal_text>
            <Card__head_edits_btns>
              <BsPencil />
            </Card__head_edits_btns>
          </Flex_space_between>
          <Flex_space_between>
            <Normal_text>Skilzen.com</Normal_text>
            <Card__head_edits_btns>
              <BsPencil />
            </Card__head_edits_btns>
          </Flex_space_between>
          <Flex_space_between>
            <Normal_text>New Delhi</Normal_text>
            <Card__head_edits_btns>
              <BsPencil />
            </Card__head_edits_btns>
          </Flex_space_between>
        </Flex_col>
        <Line style={{ width: "100%", marginTop: "10px" }} />
        <div>
          <Card__head_edits_btns style={{ marginLeft: "auto" }}>
            <BsPencil />
          </Card__head_edits_btns>
          <About_text>
            I am an enthusiastic , hardworking and cheerful Communication Design
            student at Pearl Academy. I enjoy working and perfecting my
            projects. My strengths are communication, learning languages ,
            illustrating, UI/UX Design and Research
          </About_text>
          <SocialIcons linkedin="#" facebook="#" link2="#" />
        </div>
      </Text_left>
    </Profile_card>
  );
}

export default Profil_card;
