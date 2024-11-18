import { Menu } from 'antd';
import { HomeOutlined, DesktopOutlined, SettingOutlined, TeamOutlined, HeatMapOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import useStore from '@/store';
import { useEffect, useState } from 'react';
const LayoutMenu = () => {
  const navigate = useNavigate();
  const collapsed = useStore(state => state.collapsed);
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const items = [
    {
      key: '/welcome',
      icon: <HomeOutlined />,
      label: '首页'
    },
    {
      key: '/dashboard',
      icon: <DesktopOutlined />,
      label: '工作台'
    },
    {
      key: '/system',
      icon: <SettingOutlined />,
      label: '系统管理',
      children: [
        {
          key: '/user',
          icon: <TeamOutlined />,
          label: '用户管理'
        },
        {
          key: '/dept',
          icon: <TeamOutlined />,
          label: '部门管理'
        }
      ]
    }
  ];
  useEffect(() => {
    setSelectedKeys([pathname]);
  }, []);
  const clickLogoHandler = () => {
    setSelectedKeys(['/welcome']);
    navigate('/welcome');
  };
  const clickMenuHandler = ({ key }: { key: string }) => {
    setSelectedKeys([key]);
    navigate(key);
  };
  return (
    <div>
      <div className="flex items-center h-[50px] text-[18px] text-[#FFF] cursor-pointer" onClick={clickLogoHandler}>
        <HeatMapOutlined className="m-[0_16px] text-[32px]" />
        {collapsed ? <span></span> : <span className="whitespace-nowrap">波波货运</span>}
      </div>
      <Menu mode="inline" theme="dark" items={items} onSelect={clickMenuHandler} selectedKeys={selectedKeys} />
    </div>
  );
};

export default LayoutMenu;
