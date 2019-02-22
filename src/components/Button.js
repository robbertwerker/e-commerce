import styled from "styled-components"

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: transparent;
    border: 0.04rem solid var(--lightBlue);
    border-color: ${props => props.cart?"var(--mainYellow)":"var(--lightBlue)"};
    color: ${props => props.cart ? "var(--mainYellow)": "var(--lightBlue)"};
    border-radius: 0.5rem;
    /* padding: 0.2rem 0.5rem; */
    margin-right: 2px;
    cursor: pointer;
    /* margin: 0.2rem 0.5rem; */
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainBlue)
        border-radius: 0.5rem;
    }
    &:focus{
        outline:none;
    }
`