import React from 'react'
import {Header,ColorMappingChart} from '../../components'

const ColorMapping = () => {
  return (
    <div className='m-4 mt-24 p-10 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
    <Header category='Chart' title='USA CLIMATE - WEATHER BY MONTH'/>
    <div className="w-full">
      <ColorMappingChart />
    </div>
  </div>
  )
}

export default ColorMapping