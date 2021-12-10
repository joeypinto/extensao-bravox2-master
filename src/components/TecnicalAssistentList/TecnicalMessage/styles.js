import styled from 'styled-components'

export const MessageWrapper = styled.section`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};

  h2 {
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
    text-align: justify;
  }
`
