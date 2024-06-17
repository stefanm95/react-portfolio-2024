import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`