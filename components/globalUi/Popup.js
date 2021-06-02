import styled from 'styled-components';
import { Head3, Head5, StyledButton } from './Ui';
// import Logo from '../../public/images/logo.png'

import Image from 'next/image'

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
	padding:50px;
	max-width:50%;

`

const BlurBG = styled.div`
	height: 100vh;
	width:100vw;
	background: #FFFFFF;
	filter: blur(8px);
	-webkit-filter: blur(8px);
	z-index:99999;
`

const PopupContainer = (Component)=> props=>{
    

    return(
        <>
        <BlurBG>
            <Component {...props} />
        </BlurBG>
        <PopupContainerStyled>
            <PopupContent>
                <div>
                    <Head3 >Hurray! Welcome to Skilzen Internships</Head3>
                    <Head5 >Congratulations, your company’s KYC is approved. Click the button below to start posting a internship today.</Head5>
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <p>SKIP FOR NOW</p>
                    <StyledButton radius='17' width="1.6" borderColor="#F26A7E" >START</StyledButton>
                </div>
                <div style={{textAlign:'center'}}> with ❤️ <Image src='/images/logo.png' width="103" height="34" style={{marginBottom:'-10px'}} /> </div>
            </PopupContent>
        </PopupContainerStyled>
        </>
    )
}

export default PopupContainer;