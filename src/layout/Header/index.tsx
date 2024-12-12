import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, MenuProps, theme } from 'antd';
import { Switch, Dropdown } from 'antd';
import { Layout } from 'antd';
import useStore from '@/store';
import BreadCrumb from '@/layout/Header/BreadCrumb.tsx';
const LayoutHeader = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const { Header } = Layout;
  const userInfo = useStore(state => state.userInfo);
  const collapsed = useStore(state => state.collapsed);
  const setCollapsed = useStore(state => state.setCollapsed);
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span>{'邮箱：' + userInfo.userEmail}</span>
    },
    {
      key: '2',
      label: <span>{'手机号：' + userInfo.mobile}</span>
    },
    {
      key: '3',
      label: <span>退出</span>
    }
  ];
  return (
    <Header className="flex items-center justify-between h-[50px] pl-[5px] pr-[40px]" style={{ background: colorBgContainer }}>
      <div className="flex items-center">
        <Button type="text" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <BreadCrumb></BreadCrumb>
      </div>
      <div>
        <Switch className="mr-5" checkedChildren="暗黑" unCheckedChildren="默认"></Switch>
        <Dropdown menu={{ items }} trigger={['click']}>
          <span className="cursor-pointer">{userInfo.userName}</span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default LayoutHeader;
