import styled from 'styled-components'
export const Container = styled.div`
  padding: 1rem;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-800']};
    border-bottom: 1px solid ${(props) => props.theme['green-700']};
  }
`
export const Content = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1.1rem;

  img {
    border-radius: 8px;
    width: 60px;
    height: 100;
  }
`
export const ContentInfo = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${(props) => props.theme['gray-900']};
  span {
    display: flex;
    font-size: 1.125rem;
    font-weight: 700;
    gap: 0.3rem;
  }
  /* p {
    text-transform: lowercase;
  }
  p:first-letter {
    text-transform: capitalize;
  } */
`

export const ButtonClose = styled.button`
  padding: 5px;
  position: absolute;
  right: 0.1rem;
  top: 0;
  border: 0;
  background: transparent;
`
