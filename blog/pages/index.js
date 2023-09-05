import styled from 'styled-components'
import Header from '../components/Header'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  const title = "Meu blog"
  return (
    <div className='container'>
      <Header title={title} />
      <Title>{title}</Title>
      <p>Lorem ipsum</p>
    </div>
  )
}
