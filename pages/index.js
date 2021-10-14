import styled from 'styled-components'
import Logo from '../components/Logo'
import Month from '../components/Month'
import { getDateGrid } from '../utils'

const Container = styled.div`
  margin: 80px auto;
  width: 80%;
`

function HomePage() {
  const dateGrid = getDateGrid()

  return (
    <Container>
      <Logo />
      {dateGrid.map((d, i) => (
        <Month {...d} key={`Month_${i}`} />
      ))}
    </Container>
  )
}

export default HomePage
