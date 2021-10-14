import moment from 'moment'

const createMonth = (date) => {
  const month = moment(date).startOf('month')
  const start = moment(month).startOf('isoWeek')

  return {
    month,
    days: Array.from({
      length: moment(date).endOf('month').diff(start, 'days') + 1,
    }).map((_, i) => {
      const date = moment(start).add(i, 'days')
      return {
        date,
      }
    }),
  }
}

export const getDateGrid = () => {
  const today = moment()

  return [
    createMonth(today),
    ...Array.from({ length: 12 }).map((_, i) =>
      createMonth(
        moment(today)
          .add(i + 1, 'month')
          .startOf('month')
      )
    ),
  ]
}
