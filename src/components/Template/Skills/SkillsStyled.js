import styled from 'styled-components';

export const SkillsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 462px;
    background-color: #f4fafd;
    padding: 50px 20px;

    @media(max-width: 900px) {
        height: auto;
    }

    .nameValue{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
    }

    .linearProgress{
        height: 10px;
        background-color: #e0e0e0;
    }
`;