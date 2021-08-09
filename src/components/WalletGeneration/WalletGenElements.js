import styled from 'styled-components';
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

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 20%;
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


export const FormContent = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const Form = styled.form`
    display: ${({isSubmitted}) => ((isSubmitted) ? 'none' : 'grid')};
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        height: 20%;
        padding: 32px 32px;
    }
`;

export const FormSecondary = styled.form`
    display: ${({isSubmitted}) => ((isSubmitted) ? 'grid' : 'none')};
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
        height: 20%;
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    overflow-wrap: break-word;
    padding: 0;

    @media screen and (max-width: 400px){
        max-width: 325px;
    }
`;

export const FormH2 = styled.h2`
    margin-bottom: 20px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    max-width: 380px;
    word-wrap: break-word;

    @media screen and (max-width: 400px){
        max-width: 325px;
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: solid;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #1C50D3;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #fff;
    }
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #000;
    font-size: 14px;
`;

export const TextP = styled.p`
    text-align: center;
    margin-top: 24px;
    color: #000;
    font-size: 14px;
    overflow-wrap: break-word;
    max-width: 380px;
    @media screen and (max-width: 400px){
        max-width: 325px;
    }
`

export const TextH1 = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const TextH2 = styled.h2`
    margin-bottom: 20px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
`;

export const ImgWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 555px;
    margin: 0 auto;
    padding: 35px 0 0 0;
`;

export const Img = styled.img`
    width: 100%;
`;