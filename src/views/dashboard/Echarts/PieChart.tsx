import useCharts from '@/hook/useCharts.tsx';
import { useEffect, useState } from 'react';
import { OrderType } from '@/types/api.ts';
import api from '@/api';
import { Button, Card } from 'antd';

const PieChart = () => {
  const [pieAgeData, setPieAgeData] = useState<OrderType.PieData[]>();
  const [pieCityData, setPieCityData] = useState<OrderType.PieData[]>();
  useEffect(() => {
    getPieCityData();
    getPieAgeData();
  }, []);
  const getPieCityData = async () => {
    const res = await api.getPieCityData();
    setPieCityData(res);
  };
  const getPieAgeData = async () => {
    const res = await api.getPieAgeData();
    setPieAgeData(res);
  };
  const refreshHandler = () => {
    getPieCityData();
    getPieAgeData();
  };
  const cityOption = {
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
  const ageOption = {
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
  const [pieChartCityRef] = useCharts(cityOption, pieCityData);
  const [pieChartAgeRef] = useCharts(ageOption, pieAgeData);

  return (
    <Card
      title="司机分布"
      extra={
        <Button type="primary" onClick={refreshHandler}>
          刷新
        </Button>
      }>
      <div className="flex text-center  h-[400px]">
        <div ref={pieChartCityRef} className="flex-1"></div>
        <div ref={pieChartAgeRef} className="flex-1"></div>
      </div>
    </Card>
  );
};

export default PieChart;
