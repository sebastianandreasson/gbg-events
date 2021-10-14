import moment from 'moment'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${({ isToday }) => isToday && `color: #DD4829;`}
  ${({ isPreviousMonth }) => isPreviousMonth && `opacity: 0.4;`}

  > span {
    width: 80%;
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 24px;
    border-bottom: 1px solid black;
  }
  > strong {
    font-size: 34px;
    font-weight: 700;
    margin-top: 8px;
  }
  margin: 16px 0;

  /* border: 1px dotted hotpink; */
`

const Day = ({ date, month }) => {
  const isToday = moment().startOf('day').isSame(moment(date).startOf('day'))
  const isPreviousMonth = !moment(month)
    .startOf('month')
    .isSame(moment(date).startOf('month'))
  const isInFuture = date.isAfter(moment())

  if (isPreviousMonth && isInFuture) return <div></div>

  return (
    <Container isToday={isToday} isPreviousMonth={isPreviousMonth}>
      <span>{date.format('ddd').toUpperCase()}</span>
      <strong>{date.format('D')}</strong>
    </Container>
  )
}

export default Day
