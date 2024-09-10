import useCharts from '@/hook/useCharts.tsx';
import { useEffect, useState } from 'react';
import { OrderType } from '@/types/api.ts';
import api from '@/api';
import { Button, Card } from 'antd';

const RadarChart = () => {
  const [radarData, setRadarData] = useState<OrderType.RadarData>();
  useEffect(() => {
    getRadarData();
  }, []);
  const getRadarData = async () => {
    const res = await api.getRadarData();
    setRadarData(res);
  };
  const refreshHandler = () => {
    getRadarData();
  };
  const option = {
    legend: {
      data: ['司机模型诊断'],
      left: 'left'
    },
    radar: {
      indicator: radarData?.indicator ?? [{ name: '', max: 0 }]
    },
    series: [
      {
        name: '司机模型诊断',
        type: 'radar',
        data: [radarData?.data ?? { value: [], name: '' }]
      }
    ]
  };
  const [RadarChartRef] = useCharts(option, radarData);
  return (
    <Card
      title="模型诊断"
      extra={
        <Button type="primary" onClick={refreshHandler}>
          刷新
        </Button>
      }>
      <div ref={RadarChartRef} className="h-[400px]"></div>
    </Card>
  );
};

export default RadarChart;
