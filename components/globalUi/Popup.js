import styled from 'styled-components';
import { Head3, Head5, StyledButton, Typography, Wrapper } from './Ui';
// import Logo from '../../public/images/logo.png'

import Image from 'next/image'
import { minimal } from '../../styles/pallete';
import { useState } from 'react';

const PopupContainerStyled= styled.div`
	position: fixed;
	height:100vh;
	width:100vw;
	top:0;
	z-index:100000;
	display:flex;
	align-items: center;
	justify-content: center;
`
const PopupContent = styled.div`
	position: relative;
	background: #FFFFFF;
	box-shadow: 6px 21px 28px rgba(163, 163, 163, 0.16);
	border-radius: 12px;
	padding:50px 50px 10px;
	max-width:50%;

`

const BlurBG = styled.div`
    position: fixed;
    top:0;
	height: 100vh;
	width:100vw;
	background: #FFFFFF;
	filter: blur(8px);
	-webkit-filter: blur(8px);
	z-index:99999;
`

const Footer = styled.div`
    text-align: center;
    margin: 40px 0 0 0;
    &>div{
        margin:-14px 0 !important;
    }
`

const PopupContainer = (Component)=> props=>{
    const [open,setOpen] = useState(true);

    if(open)
    return(
        <>
        <BlurBG>
            <Component {...props} />
        </BlurBG>
        <PopupContainerStyled>
            <PopupContent>
                <div style={{marginBottom:20}}>
                    <Typography size="18" weight="5" style={{marginBottom:20}}>Hurray! Welcome to Skilzen Internships</Typography>
                    <Typography size="14" weight="4" color={minimal.content} >Congratulations, your company’s KYC is approved. Click the button below to start posting a internship today.</Typography>
                </div>
                <Wrapper direction="row" alignItems="center" justifyContent="space-between">
                    <Typography size="14" weight="4" color={minimal.content} onClick={()=>setOpen(false)} >SKIP FOR NOW</Typography>
                    <StyledButton radius='17' width="1.6" borderColor="#F26A7E" onClick={()=>setOpen(false)} >START</StyledButton>
                </Wrapper>
                <Footer> with ❤️ <Image src='/images/logo.png' width="103" height="34" style={{marginBottom:'-10px'}} /> </Footer>
            </PopupContent>
        </PopupContainerStyled>
        </>
    )
    else
    return <Component {...props} />
}

export default PopupContainer;