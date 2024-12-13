import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const useCharts = (options: echarts.EChartsCoreOption, data?: any) => {
  const chart = useRef<echarts.EChartsType>();
  const chartRef = useRef<HTMLDivElement>(null);

  const echartsResize = () => {
    if (chartRef) chart?.current?.resize();
  };

  useEffect(() => {
    if (data?.length !== 0) {
      chart?.current?.setOption(options);
    }
  }, [data]);

  useEffect(() => {
    if (chartRef?.current) {
      chart.current = echarts.init(chartRef.current as HTMLDivElement);
    }
    chart?.current?.setOption(options);
    window.addEventListener('resize', echartsResize, false);
    return () => {
      window.removeEventListener('resize', echartsResize);
      chart?.current?.dispose();
    };
  }, []);

  return [chartRef];
};

export default useCharts;
