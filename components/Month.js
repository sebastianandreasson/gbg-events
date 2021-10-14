import styled from 'styled-components'
import Day from './Day'

const Container = styled.div`
  > h1 {
    font-size: 34px;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
`

const Month = ({ month, days }) => {
  return (
    <Container>
      <h1>{month.format('MMMM YYYY')}</h1>
      <div>
        {days.map((d, i) => (
          <Day {...d} key={`Day_${i}`} />
        ))}
      </div>
    </Container>
  )
}

export default Month
