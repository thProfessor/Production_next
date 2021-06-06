import styled from "styled-components";

export const Card__pink_text_h3 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 47px;
  /* identical to box height, or 166% */
  margin-bottom: 0px;
  margin-top: 15px;
  letter-spacing: 0.148074px;
  color: #f26a7e;
`;

export const Profile_card = styled.div`
  width: 25rem;
  // height: "53rem",
  box-shadow: 0px 38.4126px 72.0236px rgba(0, 0, 0, 0.05);
  padding: 40px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 15px;
`;

export const Text_left = styled.div`
  text-align: left;
`;

export const Profile_bold_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 47px;
  /* identical to box height, or 233% */
  letter-spacing: 0.148074px;

  color: #404366;
`;

export const Flex_space_between = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Flex_col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Normal_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 47px;
  /* identical to box height, or 332% */
  text-align: center;
  letter-spacing: 0.148074px;
  margin-bottom: 0px;
  color: #404366;
`;

export const About_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #404366;
`;
export const Percentage_bar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 30px;
  margin-bottom: 10px;
  
`;

export const Icon_margin = styled.span`
  margin-left: 7px;
  margin-right: 7px;
`;
export const ProfileSm_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 47px;

  padding-top: 15px;
`;
export const Image_relative = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  /* border: #404366 2px solid; */
  border-radius: 50%;
`;

export const Image_relative_inside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border: #404366 2px solid;
  border-radius: 50%;
  overflow: hidden;
`;
export const ProfileImg_adj = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image_edit = styled.button`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 40px;
  height: 40px;
  background: #404366;
  color: white;
  border-radius: 50%;
  display: flex;
  border: #404366;
  justify-content: center;
  align-items: center;
`;
