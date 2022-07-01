import React from "react";
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend,SplineAreaSeries} from "@syncfusion/ej2-react-charts";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from "../../data/dummyData";
import { useStateContext } from "../../contexts/ContextProvider";

const AreaChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent id="line-chart" height="420px" background={currentMode === "Dark" ? "#33373e" : "#ffffff"} primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}>
      <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default AreaChart;
