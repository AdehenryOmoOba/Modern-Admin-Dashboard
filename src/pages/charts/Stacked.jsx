import React from 'react'
import {Header, StackedChart} from '../../components'

const Stacked = () => {
  return (
    <div className='m-4 mt-24 p-10 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
    <Header category='Chart' title='Revenue Breakdown'/>
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
  )
}

export default Stacked