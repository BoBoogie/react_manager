import useCharts from '@/hook/useCharts.tsx';
import { useEffect, useState } from 'react';
import { OrderType } from '@/types/api.ts';
import api from '@/api';

const RadarChart = () => {
  const [radarData, setRadarData] = useState<OrderType.RadarData>();
  useEffect(() => {
    getRadarData();
  }, []);
  const getRadarData = async () => {
    const res = await api.getRadarData();
    setRadarData(res);
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
  return <div ref={RadarChartRef} className="h-[400px]"></div>;
};

export default RadarChart;
