import styled from 'styled-components';



export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color: #4a4a3e;
    border-radius: 8px;
    padding: 20px;
    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-top: 15px solid #9c1010;
    border-bottom: 15px solid #9c1010;
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #cf1919;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`