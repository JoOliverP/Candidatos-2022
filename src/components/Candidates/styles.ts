import styled from 'styled-components'

export const CandidatesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
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

export const CandidateInfo = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['yellow-500']};
  cursor: pointer;
  border: none;
  img {
    width: 200px;
    height: 250px;
  }

  h1 {
    margin: 10px 0 10px 0;
    font-size: 16px;
    color: ${(props) => props.theme['gray-900']};
  }
  span {
    position: absolute;
    right: 25px;
    top: 251px;
    background: ${(props) => props.theme['green-500']};
    /* left: 10px; */
    /* border-radius: 999px; */
    padding: 4px;
    font-size: 14px;
    font-weight: 500;
  }
`

export const GovernmentPlan = styled.a`
  width: 100%;
  padding: 5px;
  margin: 10px 0 5px 0;

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
        animation: myAnim 1s ease 0s 1 normal forwards;
      }
    }

    @keyframes myAnim {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        transform: scale(1);
      }

      100% {
        box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
        transform: scale(1.1);
      }
    }
  }
`
