import styled from "styled-components";

export const Container = styled.div`
  background: var(--dark);
  padding: 1.5rem;
  border-radius: 12px;
  width: 620px;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;

  .right-comp {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h2 {
      font-size: 14px;
      color: white;
      b {
        color: var(--blue-200);
      }
    }

    h3 {
      color: #FF9248;
      font-size: 14px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  .left-comp {
    display: flex;
    align-items: center;

    h1 {
      color: white;
      font-size: 24px;
      padding-bottom: .2rem;
    }
    
    h2 {
      font-size: 14px;
      color: white;
      b {
        color: var(--blue-200);
      }
    }

    svg {
      color: #FF9248;
      font-size: 54px;
      margin-right: 1.2rem;
    }
  }
`; 