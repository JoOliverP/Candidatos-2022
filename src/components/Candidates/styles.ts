import styled from 'styled-components'

export const CandidatesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 5rem;
`
export const CardCandidate = styled.div`
  position: relative;
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
`
export const NumberCandidate = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  right: 10px;
  padding: 0.5rem;
  border-radius: 999px;
  background: ${(props) => props.theme['blue-500']};
  h1 {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const CandidateInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['yellow-500']};

  h1 {
    margin: 10px 0 10px 0;
    font-size: 16px;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const GovernmentPlan = styled.a`
  width: 100%;
  padding: 5px;
  margin: 15px 0 5px 0;

  text-align: center;
  text-decoration: none;

  color: ${(props) => props.theme['gray-100']};
  font-size: 17px;
  font-weight: bold;

  border: 1px solid ${(props) => props.theme['gray-100']};
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme['blue-100']};
  }
`

export const Social = styled.div`
  width: 100%;
  display: flex;
  padding: 0.2rem;
  justify-content: center;
  gap: 2rem;
  margin-top: 10px;
  a {
    svg {
      color: ${(props) => props.theme['gray-100']};
      transition: 0.2s;

      &:hover {
        color: ${(props) => props.theme['yellow-500']};
      }
    }
  }
`
