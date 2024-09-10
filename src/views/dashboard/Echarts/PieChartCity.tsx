import useCharts from '@/hook/useCharts.tsx';
import { useEffect, useState } from 'react';
import { OrderType } from '@/types/api.ts';
import api from '@/api';

const PieChartCity = () => {
  const [pieCityData, setPieCityData] = useState<OrderType.PieData[]>();
  useEffect(() => {
    getPieCityData();
  }, []);
  const getPieCityData = async () => {
    const res = await api.getPieCityData();
    setPieCityData(res);
  };
  const option = {
    title: {
      text: '司机城市分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '城市分布',
        type: 'pie',
        radius: '50%',
        data: pieCityData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  const [pieChartCityRef] = useCharts(option, pieCityData);
  return <div ref={pieChartCityRef} className="flex-1"></div>;
};

export default PieChartCity;
