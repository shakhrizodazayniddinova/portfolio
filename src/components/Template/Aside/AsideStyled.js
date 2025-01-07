import styled from 'styled-components';

export const AsideStyled = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #040b14;
    padding: 0px 30px;

    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media(max-width: 900px) {
        display: ${props => (props.isVisible ? 'block' : 'none')};
        position: absolute;
        z-index: 999;
        height: 100vh;
    }

    .asideBox{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        color: white;
        padding: 50px 0;

        .nameImgBox{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;

            .imgMe{
                width: 120px;
                height: 120px;
            }

            .nameMe{
                font-weight: 600;
                font-size: 18px;
                cursor: pointer;
            }
        }

        .socialBtnBox{
            display: flex;
            align-items: center;
            gap: 15px;

            button{
                width: 40px;
                height: 40px;
                color: white;
                border-radius: 50%;
                background: color-mix(in srgb, #fff, transparent 90%);
                transition: 0.3s;

                &:hover{
                    background-color: #149ddd;
                    transition: 0.3s;
                }

                a{
                    color: white; 
                    height: 24px;
                }
            }
        }

        .asideNavBox{
            width: 100%;
            margin-top: 20px;

            .navList{
                display: flex;
                flex-direction: column;
                gap: 15px;
                
                .asideNav{
                    display: flex;
                    align-items: flex-end;
                    gap: 10px;
                    font-size: 18px;
                    cursor: pointer;
                    color: #a8a9b4;

                    &:hover{
                        color: #149ddd;

                        .navText{
                            color: white;
                        }
                    }
    
                    .navText{
                        font-size: 17px;
                    }
                }
                .active{
                    color: #149ddd;

                    .navText{
                        color: white;
                    }
                }
            } 
        }
    }
`;