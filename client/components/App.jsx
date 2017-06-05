import React from 'react'

import SearchBox from './SearchBox.jsx'
import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import SortButtons from './SortButtons'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <SearchBox />
    <LoadSubreddit />
    <WaitIndicator />
    <SortButtons />
    <SubredditList />
  </div>
)

export default App
