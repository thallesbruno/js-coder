import styled from 'styled-components'

export const Container  = styled.div `

display: grid;
grid-template-columns: 50px 650px auto;
grid-template-rows: 40px auto;
height: 100vh;
grid-template-areas: 
'menu cabecalho cabecalho'
'menuform container container';
`;