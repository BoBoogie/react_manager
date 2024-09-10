import useCharts from '@/hook/useCharts.tsx';
import { useEffect, useState } from 'react';
import { OrderType } from '@/types/api.ts';
import api from '@/api';

const PieChartAge = () => {
  const [pieAgeData, setPieAgeData] = useState<OrderType.PieData[]>();
  useEffect(() => {
    getPieAgeData();
  }, []);
  const getPieAgeData = async () => {
    const res = await api.getPieAgeData();
    setPieAgeData(res);
  };
  const option = {
    title: {
      text: '司机年龄分布',
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
        name: '年龄分布',
        type: 'pie',
        radius: [50, 150],
        roseType: 'radius',
        data: pieAgeData,
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
  const [pieChartAgeRef] = useCharts(option, pieAgeData);
  return <div ref={pieChartAgeRef} className="flex-1"></div>;
};

export default PieChartAge;
