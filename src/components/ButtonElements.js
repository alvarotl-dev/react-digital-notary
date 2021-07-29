import styled from 'styled-components';
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
export const Button = styled(Link)`
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

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#000' : '#fff')};
    }
`

export const ButtonRouter = styled(LinkR)`
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
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#000' : '#fff')};
    }
`

export const ButtonExternal = styled.a`
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
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#000' : '#2D68BD')};
    }
`