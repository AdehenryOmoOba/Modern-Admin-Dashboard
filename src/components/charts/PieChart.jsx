import React from "react";
import {AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip} from "@syncfusion/ej2-react-charts";
import {pieChartData} from "../../data/dummyData";
import { useStateContext } from "../../contexts/ContextProvider";

const PieChart = ({legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id="chart-pie"
      height={height}
      legendSettings={{ visible: legendVisiblity, background: 'white' }}
      background={currentMode === "Dark" ? "#33373e" : "#ffffff"}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }} >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
       <AccumulationSeriesDirective name="Sale" dataSource={pieChartData} xName='x' yName='y' innerRadius='40%' startAngle={0} endAngle={360} radius='70%' explode explodeOffset='10%' explodeIndex={2} dataLabel={{visible:true, name:'text', position:'Inside', font:{fontWeight:'600',color:'#ffffff'}}}>
       </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}

export default PieChart