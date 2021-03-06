import React from 'react'
import {Header,PyramidChart} from '../../components'

const Pyramid = () => {
  return (
    <div className='m-4 mt-24 p-10 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
    <Header category='Chart' title='Food Comparison Chart'/>
    <div className="w-full">
      <PyramidChart />
    </div>
  </div>
  )
}

export default Pyramid