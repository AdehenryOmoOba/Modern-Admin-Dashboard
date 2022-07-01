import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import {barCustomSeries,barPrimaryXAxis, barPrimaryYAxis} from '../../data/dummyData'
import { useStateContext } from '../../contexts/ContextProvider';

const BarChart = () => {
    const { currentMode } = useStateContext();

  return (
    <ChartComponent id="charts" primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373E' : '#fff'} legendSettings={{ background: 'white' }}>
    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
    <SeriesCollectionDirective>
      {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
    </SeriesCollectionDirective>
  </ChartComponent>
  )
}

export default BarChart