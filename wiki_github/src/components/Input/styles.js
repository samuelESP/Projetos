import styled from 'styled-components';

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 20px;
    position: relative;
    
    input {
        background: transparent;
        border: 0;
        border-radius: 20px;
        width: 90%;
        height: 62px;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 20px;
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    label{
        position: absolute;
        right: 16px;
        color: #e8e8e8;
        point-events: none;
        transform: translateY(1.3rem);
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    input:focus{
        outline: none;
    }

    input:focus ~ label{
        transform: translateY(10%) scale(0.8); 
    }
`