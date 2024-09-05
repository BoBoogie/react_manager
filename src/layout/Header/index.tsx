import { MenuFoldOutlined } from '@ant-design/icons';
import { MenuProps, theme } from 'antd';
import { Switch, Dropdown, Breadcrumb } from 'antd';
import { Layout } from 'antd';
const LayoutHeader = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const { Header } = Layout;
  const breadList = [
    {
      title: '首页'
    },
    {
      title: '关于'
    }
  ];
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span>邮箱：vongzain.bo@gmail.com</span>
    },
    {
      key: '2',
      label: <span>退出</span>
    }
  ];
  return (
    <Header className="flex items-center justify-between h-[50px] pl-[20px] pr-[40px]" style={{ background: colorBgContainer }}>
      <div className="flex">
        <MenuFoldOutlined />
        <Breadcrumb className="ml-[10px]" items={breadList}></Breadcrumb>
      </div>
      <div className="">
        <Switch className="mr-5" checkedChildren="暗黑" unCheckedChildren="默认"></Switch>
        <Dropdown menu={{ items }} trigger={['click']}>
          <span className="cursor-pointer ">admin</span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default LayoutHeader;
