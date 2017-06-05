import {SORT_BY_TITLE, SORT_BY_DATE, FILTER} from '../actions'

function parameters (state = {title: 0, date: 0, filter: ''}, action) {
  console.log('hoooooo')
  switch (action.type) {
    case SORT_BY_TITLE:
      if (state.title === 2) {
        return {title: 0, date: 0, filter: state.filter}
      }
      return {title: state.title + 1, date: state.date, filter: state.filter}
    case SORT_BY_DATE:
      console.log('hiiii')
      if (state.date === 2) {
        return {title: 0, date: 0, filter: state.filter}
      }
      return {title: 0, date: state.date + 1, filter: state.filter}
    case FILTER:
      return {title: state.title, date: state.date, filter: action.filter}
    default:
      return state
  }
}

export default parameters
