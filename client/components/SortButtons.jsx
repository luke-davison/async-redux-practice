import React from 'react'
import {connect} from 'react-redux'
import {sortByTitle, sortByDate, filterByString} from '../actions'

function SortButtons ({subreddits, parameters, sortByTitle, sortByDate}) {
  return (
    <div className='sorts' >
      {subreddits.length > 1 && <ul>
        <li>
          <button name='filter'>Only Posts That Include:</button><input name='filterBox' />
        </li>
        <li>
          <button name='sortByTitle' onClick={() => sortByTitle(parameters.title + 1)}>
            Sort by Title {parameters.title === 2 && String.fromCharCode(923)} {parameters.title === 1 && 'V'}
          </button>
          <button name='sortByDate' onClick={() => sortByDate(parameters.date + 1)}>
            Sort by Date {parameters.date === 2 && String.fromCharCode(923)} {parameters.date === 1 && 'V'}
          </button>
        </li>
      </ul>
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    subreddits: state.subreddits,
    parameters: state.parameters
  }
}

function mapDispatchToProps (dispatch) {
  return {
    sortByTitle: num => {
      dispatch(sortByTitle(num))
    },
    sortByDate: num => {
      dispatch(sortByDate(num))
    },
    filterByString: filter => {
      dispatch(filterByString(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortButtons)
