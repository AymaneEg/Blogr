import styled from "styled-components";

export const HomePageButton  = styled.button`
   
    border: none;
    width: 130px;
    height: 5vh;
    border-radius: 20px;
    background-color: rgba(231, 231, 231, 0.5);
    margin: 10px;
    transition: .4s;
    color:hsl(0, 0%, 100%) ;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: hsl(0, 0%, 100%) ;
        color: rgb(255, 61, 84 , 0.9) ;
        transform: translateY(-5px);
    }

` 

export const MenuButton  = styled.button`
   
    border: none;
    width: 110px;
    height: 5vh;
    background: none;
    border-radius: 20px;
    transition: .4s;
    color:hsl(0, 0%, 100%) ;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: rgba(231, 231, 231, 0.5) ;
        background-color: rgba(231, 231, 231, 0.5) ;
    }

` 