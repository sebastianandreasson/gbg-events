import moment from 'moment'

export const getDateGrid = () => {
  const now = moment()

  const start = now.startOf('isoWeek')

  return [
    {
      month: start,
      days: Array.from({
        length: moment().endOf('month').diff(moment().startOf('month'), 'days'),
      }).map((_, i) => {
        const date = moment(start).add(i, 'days')
        return {
          date,
        }
      }),
    },
  ]
}
