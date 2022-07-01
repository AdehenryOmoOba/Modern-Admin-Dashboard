import React from 'react'
import {Header, FinancialChart} from '../../components'

const Financial = () => {
  return (
    <div className='m-4 mt-24 p-10 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
    <Header category='Chart' title='AAPLE Historical'/>
    <div className="w-full">
      <FinancialChart />
    </div>
  </div>
  )
}

export default Financial