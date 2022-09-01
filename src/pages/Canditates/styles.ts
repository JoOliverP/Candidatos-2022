import styled from 'styled-components'

export const CanditatesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`
export const CardCandidate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['green-700']};
  padding: 25px;
  border-radius: 8px;
  /* width: 9.375rem; */
  /* height: 18.75rem; */
  img {
    width: 200px;
    height: 250px;
  }
  h1 {
    margin: 10px 0 10px 0;
    font-size: 20px;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  a {
    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }
`
