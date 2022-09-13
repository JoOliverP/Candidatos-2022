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

    .select {
      width: 250px;
      font-weight: bold;
      background: ${(props) => props.theme['gray-600']};
      
      // padding: 10px;
      // font-size: 16px;
      // color: ${(props) => props.theme['white-100']};
      // border-radius: 5px;
      // border: unset;

      // &:focus, &:hover {
      //   outline: 0;
      //   box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
      // }

      .option__control {
        // color: ${(props) => props.theme['white-100']};
        background: ${(props) => props.theme['gray-600']};

        // &:focus, &:hover {
        //   outline: 0;
        //   box-shadow: 0 0 0 1px ${(props) => props.theme['green-500']};
        //   border-color: ${(props) => props.theme['green-500']};
        // }

        .option__value-container .option__placeholder, .option__value-container .option__single-value {
          color: ${(props) => props.theme['white-100']};

          .option__state {
            display: flex;
            // justify-content: center;
            align-items: center;

            img {
              width: 7%;
              margin-right: 6px;
            }
          }
        }

        .option__indicators .option__indicator {
          // color: hsl(0, 0%, 80%)

          &:hover {
            color: hsl(0, 0%, 40%)
          }
        }
      }

      .option__control--is-focused {
        outline: 0;
        box-shadow: none;
        // border-color: ${(props) => props.theme['green-500']};
        border-color: unset;

        .option__indicators .option__indicator {
          color: hsl(0, 0%, 80%)

          // &:hover {
          //   color: hsl(0, 0%, 40%)
          // }
        }
      }

      .option__control--menu-is-open {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['green-500']};
        border-color: ${(props) => props.theme['green-500']};

        .option__indicators .option__indicator {
          color: hsl(0, 0%, 40%)
        }
      }

      .option__menu {
        background: ${(props) => props.theme['gray-600']};

        .option__menu-list {
          .option__option {
            &:hover {
              color: ${(props) => props.theme['gray-900']};
            }

            .option__state {
              display: flex;
              // justify-content: center;
              align-items: center;
  
              img {
                width: 7%;
                margin-right: 6px;
              }
            }
          }

          .option__option--is-focused {
            color: ${(props) => props.theme['gray-900']};
          }

          .option__option--is-selected {
            background: ${(props) => props.theme['green-500']};
            color: ${(props) => props.theme['white-100']};

            &:hover {
              color: ${(props) => props.theme['white-100']};
            }
          }
        }
      }

      // option {
      //   padding: 10px;
      // }
    }

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
    button {
      padding: 10px;
      border: unset;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 700;
      color: ${(props) => props.theme['gray-900']};
      background: ${(props) => props.theme['yellow-500']};
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  h1 {
    text-align: center;
  }
`
