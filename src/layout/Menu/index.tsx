import { Menu } from 'antd';
import { DesktopOutlined, SettingOutlined, TeamOutlined, HeatMapOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const LayoutMenu = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: '1',
      icon: <DesktopOutlined />,
      label: '工作台'
    },
    {
      key: '2',
      icon: <SettingOutlined />,
      label: '系统管理',
      children: [
        {
          key: '3',
          icon: <TeamOutlined />,
          label: '用户管理'
        }
      ]
    }
  ];
  const clickLogoHandler = () => {
    navigate('/welcome');
  };
  return (
    <div>
      <div className="flex items-center h-[50px] text-[18px] text-[#FFF] cursor-pointer" onClick={clickLogoHandler}>
        <HeatMapOutlined className="ml-[16px] mr-[16px] text-[32px]" />
        <span>波波货运</span>
      </div>
      <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark" items={items} />
    </div>
  );
};

export default LayoutMenu;
