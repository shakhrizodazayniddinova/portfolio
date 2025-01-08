import styled from "styled-components";

export const CvStyled = styled.div`    
    a{
        i{
            color: #fff;
            font-weight: 900;
        }

        width: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #fff;
        background-color:rgba(4, 11, 20, 0.9);
        text-decoration: none;
        border-radius: 10px;
        cursor: pointer;

        @media(max-width: 900px) {
            width: 170px;
        }
    }
`;