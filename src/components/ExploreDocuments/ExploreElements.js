import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        180deg,
        rgba(28, 80, 211, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 80px;
    }
`;

export const SearchWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const SearchForm = styled.div`
    display: grid;
    background: #fff;
    max-width: 450px;
    height: auto;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const SearchBarContainer = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 80px;
    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const SearchBarLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
`;


export const SearchBar = styled.input`
    padding: 16px 16px;
    margin-bottom: 10px;
    align-items: center;
    border: solid;
    border-radius: 25px;
    
`;

export const SearchButton = styled.button`
    background: #1C50D3;
    padding: 5px 50px;
    border: none;
    margin: auto 50px 10px;
    align-items: center;
    border-radius: 25px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #fff;
    }
`;

export const SearchElement = styled.div`
    display:${({isAvail}) => (isAvail ? 'grid' : 'none')};  
    background: #E8EEFD;
    max-width: 450px;
    width: 100%;
    z-index: 1;
    margin: 15px 0 0 0;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const TextH1 = styled.h1`
    margin-bottom: 15px;
    color: #000;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    overflow-wrap: break-word;
    margin: 10px 10px 15px 15px;

    @media screen and (max-width: 400px){
        font-size: 18px;
        max-width: 325px;
    }
`;

export const TextH2 = styled.h2`
    color: #000;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    margin: 0 20px 5px;
    max-width: 380px;
    overflow-wrap: break-word;

    @media screen and (max-width: 400px){
        max-width: 325px;
    }
`;

export const SearchElLink = styled.a`
    text-align: left;
    margin: 0 20px 5px;
    font-size: 14px;
    overflow-wrap: break-word;
    text-decoration: none;
    max-width: 350px;
    @media screen and (max-width: 400px){
        max-width: 325px;
    }
`;

export const ButtonContainer = styled.div`
    display: ${({isLoaded}) => (isLoaded ? 'flex' : 'none')};;
    align-items: center;
    padding: 20px 0px 0px 0px;
    margin: 0 auto;
    max-width: 380px;
`

export const ButtonPage = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#1C50D3' : '#1C50D3')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px':'12px 30px')};
    color: ${({dark}) => (dark ? '#fff':'#000')};
    font-size: ${({fontBig}) => (fontBig ? '20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    font-family: 'Trebuchet MS';
    visibility: ${({isVisible}) => (isVisible ? 'visible' : 'hidden')};

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#000' : '#fff')};
    }

`



