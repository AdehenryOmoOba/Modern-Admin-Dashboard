import React from 'react'
import { Header , BarChart} from '../../components'


const Bar = () => {
  return (
    <div className='m-4 mt-24 p-10 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
    <Header category='Chart' title='Comodity Growth'/>
    <div className="w-full">
      <BarChart />
    </div>
  </div>
  )
}

export default Bar