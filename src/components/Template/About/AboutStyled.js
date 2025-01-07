import styled from 'styled-components';

export const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: 100vh;
  padding: 100px 20px;
  position: relative;

  @media(max-width: 900px) {
    height: auto;
    padding: 50px 20px;
    gap: 30px;
  }

  .asideList{
    display: none;
    width: 35px;
    height: 35px;
    background-color: #040b14;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    
    @media(max-width: 900px) {
      display: flex;
      position: fixed;
      top: 15px;
      right: 15px;
      z-index: 9999;
    }
  }

  .aboutText2{
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #149ddd;
    border-width: 0px 0px 0px 1px;
  }

  .aboutData{
    .jobName{
      font-weight: 600;
    }
  }

  .gridBox{
    width: 100%;
    
    .gridContainer{
      width: 100%;
      gap: 15px;

      @media(max-width: 400px) {
        width: 90%;
        gap: 8px !important;
      }
    }

    .gridItem{      
      .aboutGridItems{
        width: auto;
        display: flex;
        align-items: center;
        gap: 10px;
  
        .arrowIcon{
          color: #149ddd;
        }
  
        .boldText{
          font-weight: 600;
          
          @media(max-width: 400px) {
            font-size: 13px;
          }
        }
        .aboutItems{
          @media(max-width: 400px) {
            font-size: 13px;
          }
        }
      }
    }
  }
`;