import { Menu } from 'antd';
import { DesktopOutlined, SettingOutlined, TeamOutlined, HeatMapOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useStore from '@/store';
const LayoutMenu = () => {
  const navigate = useNavigate();
  const collapsed = useStore(state => state.collapsed);
  const items = [
    {
      key: '/dashboard',
      icon: <DesktopOutlined />,
      label: '工作台'
    },
    {
      key: '2',
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
  const clickLogoHandler = () => {
    navigate('/welcome');
  };
  const clickMenuHandler = ({ key }: { key: string }) => {
    navigate(key);
  };
  return (
    <div>
      <div className="flex items-center h-[50px] text-[18px] text-[#FFF] cursor-pointer" onClick={clickLogoHandler}>
        <HeatMapOutlined className="m-[0_16px] text-[32px]" />
        {collapsed ? <span></span> : <span>波波货运</span>}
      </div>
      <Menu mode="inline" theme="dark" items={items} onSelect={clickMenuHandler} />
    </div>
  );
};

export default LayoutMenu;
