import styled from "styled-components";

export const Card__head = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-family: "Inter";
  width: 90%;
  margin: 3px;
  margin-left: auto;
  margin-right: auto;
`;

export const Card__head_left = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Line = styled.hr`
  border: 1px #5c5f85 solid;
  color: #5c5f85;
  margin-top: 0px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const Card__body = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Icon_adj = styled.div`
  margin: 10px;
  font-size: 25px;
`;

export const Card__head_title = styled.div`
  
  margin: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
`;
export const Card__head_add_title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #404366;
`;
export const Card__head_add = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Card__head_add_syb = styled.div`
  font-size: 25px;
  padding-bottom: 5px;
  color: #a9accb;

  &:hover {
    color: #f26a7e;
  }
`;

// ----------------------------------------------------------------------------------------------------------
// card detail styling

export const Card__detail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 20px;
  width: 100%;
`;

export const Card__detail_img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 20%;
`;
export const Card__detail_content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-align: left;
  margin-left: 5%;
  width: 100%;
`;
export const Card__detail_btns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const Card__pink_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #f28f9e;
`;

export const Card__bold_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const Card__dark_gray_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #5c5f85;
`;

export const Card__gray_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #a9accb; ;
`;

export const Medium_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #404366;
`;

export const Small_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-top: 2px;
  margin-left: 50px;
  &:nth-child(1) {
    margin-left: 0px;
  }
`;

export const Xsmall_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  margin-top: 2px;
  margin-left: 50px;
  &:nth-child(1) {
    margin-left: 0px;
  }
`;

export const Small_gray_text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  color: #a9accb;
  
`;

export const Small_gray_text_mr = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  /* identical to box height */
  color: #a9accb;
  margin-left: 7px;
  margin-right: 7px;
`;


export const Card__head_edits_btns = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #a9accb;
  
  &:hover {
    color: #f26a7e;
  }
`;
export const Pink_btn = styled.button`  
background: #F26A7E;
border-radius: 22.5px;
font-family: "Inter";
transition: all 0.2s ease;
padding: 10px;
width: 130px;
color: white;
border: none;

&:hover{
box-shadow: 1px 4px 10px #F26A7E;
}
`;

// --------------------------------------------------------------------------

export const Display_flex = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Display_flex_end = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Margin_layout = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`;

export const Width30 = styled.div`
  width: 30%;
`;

export const Width70 = styled.div`
  width: 70%;
`;

export const Short_card_border = styled.div`
  width: 54rem;
  margin:20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  border:2px solid #C9CBE2;
  transition: all 0.2s ease;

  &:hover{
    box-shadow: 6px 8px 28px #DDDDDD;
  }
`;
export const Short_card_applied = styled.div`
  width: 54rem;
  margin:20px 0px 20px 50px;
  border-radius: 8px;
  border:2px solid #C9CBE2;
  transition: all 0.2s ease;

  &:hover{
    box-shadow: 6px 8px 28px #DDDDDD;
  }
  &:nth-child(1) {
    margin-top: 5px;
  }
`;

export const Card_border = styled.div`
  width: 50rem;
  margin:20px 50px;
  border-radius: 8px;
  border:2px solid #C9CBE2;
  transition: all 0.2s ease;

  &:hover{
    box-shadow: 6px 8px 28px #DDDDDD;
  }
`;
export const Space_around = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Justify_center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Cards_navigaton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

`;


export const Cards_nav_heads = styled.p`
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 47px;
letter-spacing: 0.148074px;
color: #A9ACCB;
margin: 0px 50px; 
border-bottom: transparent solid 5px;
border-radius: 4px;
transition: all 0.2s ease;
cursor: pointer;



&:hover{
  border-bottom: #F26A7E solid 5px;
    border-radius: 4px;
    
}
&:active{
  border-bottom: #F26A7E solid 5px;
    border-radius: 4px;
}
  
`;
