import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { findTreeNode } from '@/utils';

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const [breadList, setBreadList] = useState<(string | React.ReactNode)[]>([]);
  const data = [
    {
      _id: '655db45ff10762608048caec',
      menuType: 1,
      menuName: '工作台',
      path: '/dashboard',
      icon: 'DesktopOutlined',
      orderBy: 0,
      menuState: 1,
      parentId: '',
      createId: 1000002,
      createTime: '2023-11-22T07:50:59.931Z',
      updateTime: '2023-11-22T08:27:07.828Z',
      __v: 0
    },
    {
      _id: '655db520f10762608048cafa',
      menuType: 1,
      menuName: '用户管理',
      path: '',
      icon: 'UsergroupAddOutlined',
      orderBy: 1,
      menuState: 1,
      parentId: '',
      createId: 1000002,
      createTime: '2023-11-22T07:50:59.931Z',
      updateTime: '2023-11-22T07:50:59.931Z',
      __v: 0,
      children: [
        {
          _id: '655db546f10762608048cafe',
          menuType: 1,
          menuName: '用户列表',
          path: '/user',
          icon: 'UserOutlined',
          orderBy: 0,
          menuState: 1,
          parentId: '655db520f10762608048cafa',
          createId: 1000002,
          createTime: '2023-11-22T07:50:59.931Z',
          updateTime: '2023-11-22T08:27:42.307Z',
          __v: 0
        },
        {
          _id: '655db59bf10762608048cb06',
          menuType: 1,
          menuName: '菜单管理',
          path: '/menu',
          icon: 'MenuOutlined',
          orderBy: 1,
          menuState: 1,
          parentId: '655db520f10762608048cafa',
          createId: 1000002,
          createTime: '2023-11-22T07:50:59.931Z',
          updateTime: '2023-11-22T07:50:59.931Z',
          __v: 0
        },
        {
          _id: '655db5c7f10762608048cb0e',
          menuType: 1,
          menuName: '角色管理',
          path: '/role',
          icon: 'TrademarkCircleOutlined',
          orderBy: 2,
          menuState: 1,
          parentId: '655db520f10762608048cafa',
          createId: 1000002,
          createTime: '2023-11-22T07:50:59.931Z',
          updateTime: '2023-11-22T07:50:59.931Z',
          __v: 0
        },
        {
          _id: '655dbbb911c02c8597dce71c',
          menuType: 1,
          menuName: '部门管理',
          path: '/dept',
          icon: 'SendOutlined',
          orderBy: 3,
          menuState: 1,
          parentId: '655db520f10762608048cafa',
          createId: 1000002,
          createTime: '2023-11-22T08:23:39.918Z',
          updateTime: '2023-11-22T08:23:39.918Z',
          __v: 0
        }
      ]
    },
    {
      _id: '655dbc1e11c02c8597dce724',
      menuType: 1,
      menuName: '订单管理',
      icon: 'CloudOutlined',
      orderBy: 2,
      menuState: 1,
      parentId: '',
      createId: 1000002,
      createTime: '2023-11-22T08:23:39.918Z',
      updateTime: '2023-11-22T08:23:39.918Z',
      __v: 0,
      children: [
        {
          _id: '655dbc3811c02c8597dce728',
          menuType: 1,
          menuName: '订单列表',
          path: '/orderList',
          icon: 'BarsOutlined',
          orderBy: 0,
          menuState: 1,
          parentId: '655dbc1e11c02c8597dce724',
          createId: 1000002,
          createTime: '2023-11-22T08:23:39.918Z',
          updateTime: '2023-11-22T08:23:39.918Z',
          __v: 0
        },
        {
          _id: '655dbc6c11c02c8597dce730',
          menuType: 1,
          menuName: '订单聚合',
          path: '/cluster',
          icon: 'DotChartOutlined',
          orderBy: 1,
          menuState: 1,
          parentId: '655dbc1e11c02c8597dce724',
          createId: 1000002,
          createTime: '2023-11-22T08:23:39.918Z',
          updateTime: '2023-11-22T08:23:39.918Z',
          __v: 0
        },
        {
          _id: '655dbca311c02c8597dce738',
          menuType: 1,
          menuName: '司机列表',
          path: '/driverList',
          icon: 'PayCircleOutlined',
          orderBy: 2,
          menuState: 1,
          parentId: '655dbc1e11c02c8597dce724',
          createId: 1000002,
          createTime: '2023-11-22T08:23:39.918Z',
          updateTime: '2023-11-22T08:23:39.918Z',
          __v: 0
        }
      ]
    }
  ];
  useEffect(() => {
    const list = findTreeNode(data, pathname, []);
    setBreadList([<a href="/welcome">首页</a>, ...list]);
  }, [pathname]);
  return <Breadcrumb items={breadList.map(item => ({ title: item }))} className="ml-[5px]"></Breadcrumb>;
};

export default BreadCrumb;
