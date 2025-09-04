import React from 'react';
import { EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';

interface EchartsComponentProps {
  chartOptions: EChartsOption;
  chartSeries: any;
  height?: string | number;
  width?: string | number;
  mainClass?: string;
  id?: string;
}

const SpkEcharts: React.FC<EchartsComponentProps> = ({ chartOptions, chartSeries, mainClass, height, width, id }) => {

  return (
    <ReactECharts option={{ ...chartOptions, series: chartSeries }} style={{ height, width }} key={id} className={mainClass} />
  );

};

export default SpkEcharts;
