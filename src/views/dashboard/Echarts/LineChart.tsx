import useCharts from '@/hook/useCharts.tsx';
import { OrderType } from '@/types/api.ts';
import { useEffect, useState } from 'react';
import api from '@/api';
import { Button, Card } from 'antd';

const LineChart = () => {
  const [lineData, setLineData] = useState<OrderType.LineData>();
  useEffect(() => {
    getLineData();
  }, []);
  const getLineData = async () => {
    const res = await api.getLineData();
    setLineData(res);
  };
  const refreshHandler = () => {
    getLineData();
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
  return (
    <Card
      title="订单和流水走势图"
      extra={
        <Button type="primary" onClick={refreshHandler}>
          刷新
        </Button>
      }
    >
      <div ref={lineChartRef} className="h-[400px]"></div>
    </Card>
  );
};

export default LineChart;
