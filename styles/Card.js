import styled from "styled-components" 

export const Card__head = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    font-family: "Inter";
    width:90%;
    margin: 3px;
    margin-left: auto;
    margin-right: auto;

    `
    ;

    export const Card__head_left= styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;

    `
    ;

    export const Line = styled.hr`
    
    border: 1px #5C5F85 solid ;
    color: #5C5F85;
    margin-top:0px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    
    `
    ;

    export const Card__body = styled.div`
    
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 10px;
    
    `
    ;

    export const Icon_adj= styled.div`
    margin: 10px;
    font-size: 25px;
    `
    ;

 
    export const Card__head_title = styled.div`
    /* font-size: 28px; */
    margin:10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    `
    ;
    export const Card__head_add_title = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #404366;
    `
    ;
    export const Card__head_add = styled.button`
   
    background: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    `
    ;

    export const Card__head_add_syb = styled.div`
    color: #E3566B;
    font-size:25px;
    padding-bottom: 5px;
    
    `
    ;

    // ----------------------------------------------------------------------------------------------------------
    // card detail styling

    export const Card__detail = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 20px;
    width: 100%;
    `
    ;

    export const Card__detail_img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 20%;
    `
    ;
    export const Card__detail_content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    text-align: left;
    margin-left: 5%;
    width: 100%;
    `
    ;
    export const Card__detail_btns = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 20%;
    `
    ;

    export const Card__detail_degree = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #F28F9E;
    `
    ;

    export const Card__detail_college = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    `
    ;

    export const Card__detail_clg_city = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #5C5F85;
    `
    ;

    export const Card__detail_branch = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #5C5F85;
    `
    ;


    export const Card__head_edits_btns = styled.button`
   
    background: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: #A9ACCB;

    &:hover{
        color: #F26A7E;
        
    }
    `
    ;