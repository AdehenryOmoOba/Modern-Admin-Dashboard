import React from 'react'
import { Header } from '../../components'
import PieChart from '../../components/charts/PieChart'

const Pie = () => {
  return (
    <div className='m-4 mt-24 p-10 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Project Cost Breakdown'/>
      <div className="w-full">
        <PieChart legendVisiblity height="full"/>
      </div>
    </div>
  )
}

export default Pie