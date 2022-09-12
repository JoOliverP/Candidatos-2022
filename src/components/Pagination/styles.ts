import styled from 'styled-components'

export const PaginateContainer = styled.div`
  .pagination {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    list-style-type: none;
    margin-bottom: 1rem;

    padding: 10px;

    li {
      padding: 10px;
      border-radius: 20px;
      background-color: ${(props) => props.theme['gray-800']};
      a {
        font-size: 18px;
        padding: 0.5px;
        margin: 0.5rem;
        cursor: pointer;
        &:focus {
          box-shadow: none;
        }
      }
    }
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['yellow-500']};
  }
`
