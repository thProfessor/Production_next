import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import styled from "styled-components";
import { StyledButton, Typography,Wrapper } from "../components/globalUi/Ui";
import { PageBG } from "../components/setprofile";
import { minimal, primary } from "../styles/pallete";
import {FiBriefcase} from 'react-icons/fi'
import { BsBook,BsCheck } from "react-icons/bs";
import {IoDocumentTextOutline,IoPersonOutline} from 'react-icons/io5'
import Personal from "../components/setprofile/Personal";
import Profile from "../components/setprofile/Profile";


const FormWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  width: 90vw;
  min-height: 80vh;
  padding: 40px;
  background-color: white;
  box-shadow: 0px 30px 72px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  row-gap:10px;
`;

const FormHeader = styled.div`
`

const FormHeader2 = styled.div`
  margin:20px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

const IconWrapper= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color:${primary.formDarkGrey};
  h1{
    color:${primary.formDarkGrey};
  }
  .icon{
    font-size: 30px;
    color:${primary.formDarkGrey};
  }
  .check-icon{
    visibility: hidden;
  }
  &.active{
    h1{
      color:black;
    }
    .icon{
      color:${primary.lightCherry};
    }
  }
  &.visited {
    .check-icon{
      visibility: visible;
    }
  }
`

const FormBody = styled.div``;

const stepDetails = [
  {
    heading:'Personal',
    subHeading:'Start by accurately filling out your personal details.',
    icon:IoPersonOutline,
  },
  {
    heading:'Profile',
    subHeading:'Add in your profile details to continue.',
    icon:IoDocumentTextOutline,
  },
  {
    heading:'Education',
    subHeading:'Add in your Education details to continue.',
    icon:BsBook,
  },
  {
    heading:'Experience',
    subHeading:'Add in your Experience details to continue.',
    icon:FiBriefcase,
  },
]

const defaultData={
  firstname:'',
  lastname:'',
  gender:'male'
}

const setprofile = () => {
  const {index,navigation} = useStep({steps:4});
  const [form,setForm] =useForm(defaultData);
  // const index=1;

  const formBodyFn = ()=>{
    switch(index){
      case 0:
        return <Personal formOnChange={setForm} form={form} navigation={navigation} />
      case 1:
        return <Profile formOnChange={setForm} form={form} navigation={navigation} />
      case 2:
        return <Personal formOnChange={setForm} form={form} navigation={navigation} />
      case 3:
        return <Personal formOnChange={setForm} form={form} navigation={navigation} />
      default:
    }
  }

  return (
    <PageBG>
      <FormWrapper>
        <FormHeader>
          <Typography size="36" weight="5" >Setting up Profile</Typography>
          <FormHeader2>
            <div>
              <Typography size="28" weight="5" color={primary.lightCherry}>{stepDetails[index].heading} Detail</Typography>
              <Typography size="20" weight="4" color={primary.formDarkGrey}>{stepDetails[index].subHeading}</Typography>
            </div>
            <Wrapper direction="row" alignItems="center" columnGap="1.3" >
              {
                stepDetails.map((step,id)=>{
                  const Icon=step.icon;
                  return (
                    <IconWrapper className={index===id?'active':(index>id?'visited':'')}>
                      <BsCheck className='check-icon' />
                      <Icon className='icon' />
                      <Typography weight="4" size="16" >{step.heading}</Typography>
                    </IconWrapper>
                  )
                })
              }
            </Wrapper>
          </FormHeader2>
        </FormHeader>
        <FormBody>
          {
            formBodyFn()
          }
        </FormBody>
      </FormWrapper>
    </PageBG>
  );
};

export default setprofile;
