import React from "react";
import styled from "styled-components";

const Logo = styled.img`
   height:100%;
   margin: 10px 0;

`;

const Wrapper = styled.div`
    width:100vw;
    height:68px;
    display:flex;
    padding:20px 58px;
    box-sizeing:border-box;
`;

const NavText = styled.ul`
    display:flex;
    color:white;
    list-style:none;
    height:100%;
    flex:1;
    align-items:center;
`;

const NavIcon = styled.ul`
    display:flex;
    list-style:none;
    height:100%;
   
`;

const NavTextItem = styled.li`
    
`;

const NavIconItem = styled.li`
    width:fit-content;

     & > img{
        height:100%;
    }
`;




const Banner = props => {
    return (
    <Wrapper>
        <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png" alt=""/>
        <NavText>
            <NavTextItem>홈</NavTextItem>
            <NavTextItem>TV 프로그램</NavTextItem>
            <NavTextItem>영화</NavTextItem>
            <NavTextItem>최신 등록 콘텐츠</NavTextItem>
            <NavTextItem>내가 찜한 콘텐츠</NavTextItem>
            </NavText>
            <NavIcon>
                <NavIconItem><img src="https://st3.depositphotos.com/5532432/17958/v/1600/depositphotos_179582526-stock-illustration-magnifier-flat-vector-icon.jpg" alt=""/></NavIconItem>
                <NavIconItem><img src="" alt=""/></NavIconItem>
                <NavIconItem><img src="" alt=""/></NavIconItem>
            </NavIcon>
    </Wrapper>
    );
};



export default Banner;