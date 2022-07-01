import React from 'react'
import {ChartComponent, SeriesCollectionDirective, Inject,LineSeries,DateTime,Legend,Tooltip, SeriesDirective} from '@syncfusion/ej2-react-charts'
import {lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis} from '../../data/dummyData'
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
  const {currentMode} = useStateContext()

  return (
    <ChartComponent id='line-chart' height='420px' background={currentMode === 'Dark' ? '#33373e' : '#ffffff'} primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{border:{width:0}}} tooltip={{enable:true}}>
      <Inject services={[LineSeries, DateTime,Legend,Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart