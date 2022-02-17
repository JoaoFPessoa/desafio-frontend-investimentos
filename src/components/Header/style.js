import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
@media (max-width: 768px) {
    text-align: center;
}
h1{
    font-size: 2.5rem;
    @media(max-width: 768px){
    font-size: 1.5rem;
}
}

`