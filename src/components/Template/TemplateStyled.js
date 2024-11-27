import styled from 'styled-components';

export const TemplateStyled = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    font-family: 'Roboto', sans-serif;

    main{
        width: calc(100% - 300px);
        height: 100vh;
        background-color: #fff;

        @media(max-width: 800px) {
            width: 100%;
        }

        overflow-y: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;