import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #68e8e8;

display: flex;
justify-content: center;
align-items: center;
`

export const Content = styled.div`
background-color: #cef5f0;
width: 50%;
border-radius: 40px;
padding-bottom: 35px;
`

export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

`

export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`