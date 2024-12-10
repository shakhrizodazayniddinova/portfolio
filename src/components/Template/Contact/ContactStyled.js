import styled from 'styled-components';

export const ContactStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: auto;
    padding: 100px 20px;

    .contactBox{
        padding: 30px;

        @media(max-width: 450px) {
            padding: 10px;
            gap: 20px;
        }

        .contactInformation{
            display: flex;
            align-items: center;
            gap: 10px;

            .contactInformIcon{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 44px;
                height: 44px;
                background: color-mix(in srgb, #149ddd, transparent 80%);
                border-radius: 100%;
                border: none;
                transition: 0.3s;
                
                &:hover{
                    transition: 0.3s;
                    background-color: #149ddd;
                    cursor: pointer;
                    
                    i{
                        color: white;
                    }
                }

                i{
                    font-size: 20px;
                    color: #149ddd;
                }
            }

            .email{
                @media(max-width: 362px){
                    font-size: 13px;
                }
            }
        }
    }
`;