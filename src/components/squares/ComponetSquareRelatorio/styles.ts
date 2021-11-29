import styled from "styled-components";

export const ContainerSquareRelatorio = styled.div`
  background: white;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;


  @media (max-width: 600px){
    margin: 3rem 1.6rem;
    }


  padding: 1.2rem;
  border-top: .5rem solid var(--blue-500);
  border-radius: 1.2rem;

  border-radius: 12px;

  .title-conatainer {
    display: flex;
    align-items: center;
    justify-content: center;

    position:relative;
    
    h1 {
      font-size: 1.2rem;
      text-align: center;
    }
   button {
    position: absolute;
      right: 0;
      border: none;
      background: transparent ;
   }
    svg {
      

      &:hover {
        filter: brightness(.95);
      }
    }

    svg::hover {
      left: auto;  
    }

  }


  .infos-table {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2rem 0;
    
    @media (max-width: 600px){
      flex-direction: column;
      .ant-select, .ant-picker {
          width: 100% !important;
      }
    }
    
    .total-ocorencias {
      padding-top: 1rem;
      width: 100%;
      text-align: right;
    }

    .filter {
      display: flex;
      gap: 1rem;
      align-items: center;
      width: 100%;
      
      @media (max-width: 1000px){
        flex-direction: column;

      }
    }
    p {
      font-size: 1.1rem;
      color: #4D4F6C; 
      margin: 0;

      strong {
       color: #0F5481; 

      }
    }

    .filter{
      select {
        padding: .5rem;

        border: 1px solid #b8b8b8;
        border-radius: 20px;
      }
    }
  }
  .ant-table-wrapper {
    @media (max-width: 600px){
      overflow-x: auto;
    }
  }

`;
