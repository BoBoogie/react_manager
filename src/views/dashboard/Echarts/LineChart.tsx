import useCharts from '@/hook/useCharts.tsx';
import { OrderType } from '@/types/api.ts';
import { useEffect, useState } from 'react';
import api from '@/api';

const LineChart = () => {
  const [lineData, setLineData] = useState<OrderType.LineData>();
  useEffect(() => {
    getLineData();
  }, []);
  const getLineData = async () => {
    const res = await api.getLineData();
    setLineData(res);
  };
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['订单', '流水']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: lineData?.label
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '订单',
        type: 'line',
        stack: 'Total',
        data: lineData?.order
      },
      {
        name: '流水',
        type: 'line',
        stack: 'Total',
        data: lineData?.money
      }
    ]
  };
  const [lineChartRef] = useCharts(option, lineData);
  return <div ref={lineChartRef} className="h-[400px]"></div>;
};

export default LineChart;
