import styled from 'styled-components';

export const ResumeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: 100vh;
  padding: 50px 20px;
  margin-top: 50px;

  @media(max-width: 900px) {
    height: auto;
  }

  .resumeBox{
    width: 100%;
    height: auto;
    display: flex;

    @media(max-width: 450px) {
      flex-direction: column;
      gap: 40px;
    }

    .gridItemBox{
      display: flex;
      flex-direction: column;
      column-gap: 30px;
      row-gap: 15px;
      
      .gridItemBoxItems{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0px 20px 5px 20px;
        border-left: 2px solid #007bff;
  
        .circle{
          width: 15px;
          height: 15px;
          background-color: transparent;
          border: 2px solid #007bff;
          border-radius: 100%;
          position: absolute;
          top: -15px;
          left: -8px;
        }
      }
      .gridItemBoxItems2{
        padding-bottom: 40px;
      }
    }

    .gridItemBox2{
      margin-top: 40px;
    }
  }
`;