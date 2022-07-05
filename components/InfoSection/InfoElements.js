import styled from 'styled-components';

export const InfoContainer = styled.div`
    direction: ltr;
    z-index: 1;
    font-family: iransans;
    max-width: 100%;
    margin-left: 20%;
    /* padding-left: 25%; */
    @media screen and (max-width: 768px) {
        /* padding:2px; */
        margin-left: 0%;
        
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
    height: 100vh;
    width: 100%;
    // max-width: 100%;
    justify-content: center;

    @media screen and (max-width: 1048px) {
        
    }    
    @media screen and (max-width: 768px) {
        
        /* padding-top: 20px;    */
    }
    @media screen and (max-width: 480px) {
       
        padding-left: 20px;
    }  
    
`;

export const InfoRow =styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    padding: 10px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 1580px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        /* margin-right: 15px; */
    }
`;


export const Column1 = styled.div`
    grid-area: col1;
    max-width: 100%;

    
`;

export const Column2 = styled.div`
    grid-area: col2;
    max-width: 100%;
    
`;

export const TextWrapper = styled.div`
    max-width: max-content;
    text-align: center;
    /* white-space: nowrap; */
    padding-bottom: 60px;
    
`;

export const TopLine = styled.p`
    color:  #fff ;
    /* white-space: nowrap; */
    text-align: Left;
    /* text-decoration: underline; */
    font-size:150px;
    text-shadow: 2.1px 1px 9px rgba(0, 0, 0, 0.4);
    font-weight: bolder;
    /* border-bottom-style: solid; */
    border-color: lightblue;
    
    @media screen and (max-width: 768px) {
        
        font-size: 50px;
    } 
    @media screen and (max-width: 480px) {
        font-size: 50px;
    }
`;

export const Heading = styled.h1`

    font-size: 30px;
   /* white-space: nowrap; */
    text-shadow: 1.1px 2px 5px rgba(0, 0, 0, 0.4);
    text-align: left;
    letter-spacing:1px;
    font-weight: bolder;
    color: ${({lightText}) => (lightText ? '#60724b' : '#60724b')};

    @media screen and (max-width: 768px) {
        font-size: 22px;
        
        /* line-height: 5px; */
        
    }

    @media screen and (max-width:480px) {
        font-size: 22px;
        /* margin-left: 20px; */
        /* margin-right: 20px; */
    }
`;

export const Subtitle = styled.p`
    
    text-align: left;
   letter-spacing: 1px;
    white-space: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    font-weight: bolder;
    /* padding: 10px; */
    /* padding-right: 20px; */
    /* padding-left: 20px; */
    /* line-height: 40px; */
    color: ${({darkText}) => (darkText ? '#000' : '#fff')};
    padding-bottom: 20px;
    /* padding-top: 20px; */

    @media screen and (max-width: 480px) {
        margin: 0px;
        font-size: 18px;
        max-width: 100%;
        white-space: normal;
    }
`;
export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
   
`;


export const ImgWrap = styled.div`  
    max-width: 100%;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 768px) {
    
    }

`;

export const Img=styled.img`
    width: 100%;
    /* border-radius: 10px; */
    transition: all 0.6s ease-out;
    filter: drop-shadow(-10px 10px 10px #000);

    /* &:hover {
        transform: scale(1.09);
        cursor: pointer;   
    } */
`;


export const img=styled.img`
    width: 100%;
    
    
`;