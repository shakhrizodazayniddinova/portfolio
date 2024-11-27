import styled from 'styled-components';

export const WorksStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: auto;
    margin-top: 50px;
    padding: 50px 20px;
    background-color: #f4fafd;

    .worksBox{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px;

        .nav{
            display: flex;
            gap: 15px;

            .workCategory{
                color: black;
                text-decoration: none;
                cursor: pointer;

                &:hover{
                    color: #149ddd;
                }
            }
            .active{
                color: #149ddd;
            }
        }

        .workCard{
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 382px;
            height: auto;
            position: relative;
            
            .workCardImgBox{
                max-width: 382px;
                max-height: 194px;
                overflow: hidden;

                &:hover{
                    .sourceCode{
                        transition: 0.3s;
                        display: block;
                    }
                }
                
                img{
                    max-width: 382px;
                    max-height: 194px;
                    object-fit: cover;
                    transition: 0.3s;
                    filter: brightness(1);
    
                    &:hover{
                        transition: 0.3s;
                        transform: scale(1.1);
                        filter: brightness(0.7);
                    }
                }

                .sourceCode{
                    display: none;
                    position: absolute;
                    z-index: 100;
                    top: 2px;
                    right: 5px;
                    text-decoration: none;
                    font-weight: bold;
                    padding: 5px 10px;
                    background-color: #149ddd;
                    color: #fff;
                    border-radius: 10px;

                    @media(max-width: 450px) {
                        display: block;
                    }
                }
                .sourceCodeNone{
                    padding: 0px !important;
                }
            }


            .workCardSec{
                display: flex;
                flex-direction: column;
                gap: 10px;

                .workName{
                    a{
                        color: black;
                    }
                }
            }
        }
    }
`;