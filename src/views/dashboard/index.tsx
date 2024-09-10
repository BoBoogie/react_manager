import { Descriptions, DescriptionsProps } from 'antd';
import useStore from '@/store';
import api from '@/api';
import { useEffect, useState } from 'react';
import { OrderType } from '@/types/api.ts';
import { formatMoney, formatNum } from '@/utils';
import LineChart from '@/views/dashboard/Echarts/LineChart.tsx';
import PieChart from '@/views/dashboard/Echarts/PieChart.tsx';
import RadarChart from '@/views/dashboard/Echarts/RadarChart.tsx';

const Dashboard = () => {
  const userInfo = useStore(state => state.userInfo);
  const [report, setReport] = useState<OrderType.ReportData>();
  useEffect(() => {
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
        <LineChart />
      </div>
      <div className="mt-[50px]">
        <PieChart />
      </div>
      <div className="mt-[50px]">
        <RadarChart />
      </div>
    </div>
  );
};

export default Dashboard;
