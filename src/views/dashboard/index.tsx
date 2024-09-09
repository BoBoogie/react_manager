import { Descriptions, Card, DescriptionsProps, Button } from 'antd';
import useStore from '@/store';
import api from '@/api';
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';
import { OrderType } from '@/types/api.ts';
import { formatMoney, formatNum } from '@/utils';

const Dashboard = () => {
  const userInfo = useStore(state => state.userInfo);
  const [report, setReport] = useState<OrderType.ReportData>();
  useEffect(() => {
    const lineChartDom = document.getElementById('lineChart');
    const chartInstance = echarts.init(lineChartDom as HTMLElement);
    chartInstance.setOption({
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
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单',
          type: 'line',
          stack: 'Total',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
        },
        {
          name: '流水',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310, 380, 400, 430, 470, 290]
        }
      ]
    });
    const pieChartCityDom = document.getElementById('pieChartCity');
    const pieChartCityInstance = echarts.init(pieChartCityDom as HTMLElement);
    pieChartCityInstance.setOption({
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
          data: [
            { value: 1048, name: '北京' },
            { value: 735, name: '上海' },
            { value: 580, name: '广州' },
            { value: 484, name: '深圳' },
            { value: 300, name: '南京' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    const pieChartAgeDom = document.getElementById('pieChartAge');
    const pieChartAgeInstance = echarts.init(pieChartAgeDom as HTMLElement);
    pieChartAgeInstance.setOption({
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
          data: [
            { value: 1048, name: '20-30' },
            { value: 735, name: '30-40' },
            { value: 580, name: '40-50' },
            { value: 484, name: '50-60' },
            { value: 300, name: '60-70' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    const radarChartDom = document.getElementById('radarChart');
    const radarChartInstance = echarts.init(radarChartDom as HTMLElement);
    radarChartInstance.setOption({
      legend: {
        data: ['司机模型诊断'],
        left: 'left'
      },
      radar: {
        indicator: [
          { name: '服务态度', max: 10 },
          { name: '在线时长', max: 720 },
          { name: '接单率', max: 300 },
          { name: '评分', max: 5 },
          { name: '关注度', max: 10000 }
        ]
      },
      series: [
        {
          name: '司机模型诊断',
          type: 'radar',
          data: [
            {
              value: [9, 600, 240, 4.6, 8607],
              name: '司机模型诊断'
            }
          ]
        }
      ]
    });
    getReportData();
  }, []);
  const getReportData = async () => {
    const res = await api.getReportData();
    setReport(res);
  };
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '用户ID',
      children: <p>{userInfo.userId}</p>
    },
    {
      key: '2',
      label: '邮箱',
      children: <p>{userInfo.userEmail}</p>
    },
    {
      key: '3',
      label: '状态',
      children: <p>{userInfo.stateName}</p>
    },
    {
      key: '4',
      label: '手机号',
      children: <p>{userInfo.mobile}</p>
    },
    {
      key: '5',
      label: '岗位',
      children: <p>{userInfo.job}</p>
    },
    {
      key: '6',
      label: '部门',
      children: <p>{userInfo.deptName}</p>
    }
  ];
  return (
    <div className="bg-white p-[20px]">
      <div className="flex items-center">
        <img className="w-[80px] h-[80px] mr-[25px]" src={userInfo.userImg} alt="" />
        <Descriptions className="pb-[16px]" title={'欢迎' + userInfo.userName + '，每天都要开心！'} items={items} />;
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1 h-[100px] p-[10px] mr-[20px] rounded-[5px] text-white text-[14px] bg-[#F4864F]">
          <span>司机数量</span>
          <div className="text-[24px] text-center">{formatNum(report?.driverCount) + '个'}</div>
        </div>
        <div className="flex-1 h-[100px] p-[10px] mr-[20px] rounded-[5px] text-white text-[14px] bg-[#887EDC]">
          <span>总流水</span>
          <div className="text-[24px] text-center">{formatMoney(report?.totalMoney) + '元'}</div>
        </div>
        <div className="flex-1 h-[100px] p-[10px] mr-[20px] rounded-[5px] text-white text-[14px] bg-[#4F95E5]">
          <span>总订单</span>
          <div className="text-[24px] text-center">{formatNum(report?.orderCount) + '单'}</div>
        </div>
        <div className="flex-1 h-[100px] p-[10px] mr-0 rounded-[5px] text-white text-[14px] bg-[#6DC3D7]">
          <span>开通城市</span>
          <div className="text-[24px] text-center">{formatNum(report?.cityNum) + '座'}</div>
        </div>
      </div>
      <div className="mt-[50px]">
        <Card title="订单和流水走势图" extra={<Button type="primary">刷新</Button>}>
          <div id="lineChart" className="h-[400px]"></div>
        </Card>
      </div>
      <div className="mt-[50px]">
        <Card title="司机分布" extra={<Button type="primary">刷新</Button>}>
          <div className="flex text-center  h-[400px]">
            <div id="pieChartCity" className="flex-1"></div>
            <div id="pieChartAge" className="flex-1"></div>
          </div>
        </Card>
      </div>
      <div className="mt-[50px]">
        <Card title="模型诊断" extra={<Button type="primary">刷新</Button>}>
          <div id="radarChart" className="h-[400px]"></div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
