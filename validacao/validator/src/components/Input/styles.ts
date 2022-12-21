import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #ffffff;
    border: 1px solid #cf1919;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }
`

export const ErrorMessage = styled.p`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`