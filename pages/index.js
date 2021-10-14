import moment from 'moment'
import styled from 'styled-components'
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
      <Month {...dateGrid[0]} />
    </Container>
  )
}

export default HomePage
