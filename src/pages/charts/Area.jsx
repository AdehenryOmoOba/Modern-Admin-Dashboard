import React from 'react'
import {Header,AreaChart} from '../../components'


const Area = () => {
  return (
    <div className='m-4 mt-24 p-10 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Inflation Rate in Percetage'/>
      <div className="w-full">
        <AreaChart />
      </div>
    </div>
  )
}

export default Area