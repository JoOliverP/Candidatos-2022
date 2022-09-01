import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
  gap: 1.5rem;

  form {
    display: flex;
    /* margin: auto; */
    gap: 0.8rem;

    select {
      padding: 10px;
      font-size: 16px;
      font-weight: 700;
      color: ${(props) => props.theme['white-100']};
      background: ${(props) => props.theme['gray-600']};
      border-radius: 5px;
      border: unset;

      option {
        padding: 10px;
      }
    }
    input {
      padding: 10px;
      border: unset;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 700;
      color: ${(props) => props.theme['gray-900']};
      background: ${(props) => props.theme['yellow-500']};
    }
  }
`
