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
      __v: 0,
      children: [
        {
          _id: '655db4a4f10762608048caf4',
          menuType: 2,
          menuName: '查看',
          menuCode: 'home@query',
          orderBy: 0,
          menuState: 1,
          parentId: '655db45ff10762608048caec',
          createId: 1000002,
          createTime: '2023-11-22T07:50:59.931Z',
          updateTime: '2023-11-22T07:50:59.931Z',
          __v: 0
        }
      ],
      buttons: [
        {
          _id: '655db4a4f10762608048caf4',
          menuType: 2,
          menuName: '查看',
          menuCode: 'home@query',
          orderBy: 0,
          menuState: 1,
          parentId: '655db45ff10762608048caec',
          createId: 1000002,
          createTime: '2023-11-22T07:50:59.931Z',
          updateTime: '2023-11-22T07:50:59.931Z',
          __v: 0
        }
      ]
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
          __v: 0,
          children: [
            {
              _id: '655db556f10762608048cb02',
              menuType: 2,
              menuName: '查看',
              menuCode: 'user@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655db546f10762608048cafe',
              createId: 1000002,
              createTime: '2023-11-22T07:50:59.931Z',
              updateTime: '2023-11-22T07:50:59.931Z',
              __v: 0
            },
            {
              _id: '655dc53ed4dc6d6fda15dbad',
              menuType: 2,
              menuName: '新增',
              menuCode: 'user@create',
              orderBy: 1,
              menuState: 1,
              parentId: '655db546f10762608048cafe',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc67ed4dc6d6fda15dbc7',
              menuType: 2,
              menuName: '编辑',
              menuCode: 'user@edit',
              orderBy: 2,
              menuState: 1,
              parentId: '655db546f10762608048cafe',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc68ad4dc6d6fda15dbcb',
              menuType: 2,
              menuName: '删除',
              menuCode: 'user@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655db546f10762608048cafe',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ],
          buttons: [
            {
              _id: '655db556f10762608048cb02',
              menuType: 2,
              menuName: '查看',
              menuCode: 'user@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655db546f10762608048cafe',
              createId: 1000002,
              createTime: '2023-11-22T07:50:59.931Z',
              updateTime: '2023-11-22T07:50:59.931Z',
              __v: 0
            },
            {
              _id: '655dc53ed4dc6d6fda15dbad',
              menuType: 2,
              menuName: '新增',
              menuCode: 'user@create',
              orderBy: 1,
              menuState: 1,
              parentId: '655db546f10762608048cafe',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc67ed4dc6d6fda15dbc7',
              menuType: 2,
              menuName: '编辑',
              menuCode: 'user@edit',
              orderBy: 2,
              menuState: 1,
              parentId: '655db546f10762608048cafe',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc68ad4dc6d6fda15dbcb',
              menuType: 2,
              menuName: '删除',
              menuCode: 'user@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655db546f10762608048cafe',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ]
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
          __v: 0,
          children: [
            {
              _id: '655db5a8f10762608048cb0a',
              menuType: 2,
              menuName: '查看',
              menuCode: 'menu@queyr',
              orderBy: 0,
              menuState: 1,
              parentId: '655db59bf10762608048cb06',
              createId: 1000002,
              createTime: '2023-11-22T07:50:59.931Z',
              updateTime: '2023-11-22T07:50:59.931Z',
              __v: 0
            },
            {
              _id: '655dc69bd4dc6d6fda15dbcf',
              menuType: 2,
              menuName: '新增',
              menuCode: 'menu@create',
              orderBy: 1,
              menuState: 1,
              parentId: '655db59bf10762608048cb06',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6a5d4dc6d6fda15dbd3',
              menuType: 2,
              menuName: '编辑',
              menuCode: 'menu@edit',
              orderBy: 2,
              menuState: 1,
              parentId: '655db59bf10762608048cb06',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6afd4dc6d6fda15dbd7',
              menuType: 2,
              menuName: '删除',
              menuCode: 'menu@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655db59bf10762608048cb06',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ],
          buttons: [
            {
              _id: '655db5a8f10762608048cb0a',
              menuType: 2,
              menuName: '查看',
              menuCode: 'menu@queyr',
              orderBy: 0,
              menuState: 1,
              parentId: '655db59bf10762608048cb06',
              createId: 1000002,
              createTime: '2023-11-22T07:50:59.931Z',
              updateTime: '2023-11-22T07:50:59.931Z',
              __v: 0
            },
            {
              _id: '655dc69bd4dc6d6fda15dbcf',
              menuType: 2,
              menuName: '新增',
              menuCode: 'menu@create',
              orderBy: 1,
              menuState: 1,
              parentId: '655db59bf10762608048cb06',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6a5d4dc6d6fda15dbd3',
              menuType: 2,
              menuName: '编辑',
              menuCode: 'menu@edit',
              orderBy: 2,
              menuState: 1,
              parentId: '655db59bf10762608048cb06',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6afd4dc6d6fda15dbd7',
              menuType: 2,
              menuName: '删除',
              menuCode: 'menu@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655db59bf10762608048cb06',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ]
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
          __v: 0,
          children: [
            {
              _id: '655dbb0011c02c8597dce710',
              menuType: 2,
              menuName: '查看',
              icon: 'role@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655db5c7f10762608048cb0e',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:40:20.527Z',
              __v: 0,
              menuCode: 'role@query'
            },
            {
              _id: '655dc6c7d4dc6d6fda15dbdb',
              menuType: 2,
              menuName: '编辑',
              menuCode: 'role@edit',
              orderBy: 1,
              menuState: 1,
              parentId: '655db5c7f10762608048cb0e',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6d3d4dc6d6fda15dbdf',
              menuType: 2,
              menuName: '设置权限',
              menuCode: 'role@setting',
              orderBy: 2,
              menuState: 1,
              parentId: '655db5c7f10762608048cb0e',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6ddd4dc6d6fda15dbe3',
              menuType: 2,
              menuName: '删除',
              menuCode: 'role@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655db5c7f10762608048cb0e',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ],
          buttons: [
            {
              _id: '655dbb0011c02c8597dce710',
              menuType: 2,
              menuName: '查看',
              icon: 'role@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655db5c7f10762608048cb0e',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:40:20.527Z',
              __v: 0,
              menuCode: 'role@query'
            },
            {
              _id: '655dc6c7d4dc6d6fda15dbdb',
              menuType: 2,
              menuName: '编辑',
              menuCode: 'role@edit',
              orderBy: 1,
              menuState: 1,
              parentId: '655db5c7f10762608048cb0e',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6d3d4dc6d6fda15dbdf',
              menuType: 2,
              menuName: '设置权限',
              menuCode: 'role@setting',
              orderBy: 2,
              menuState: 1,
              parentId: '655db5c7f10762608048cb0e',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6ddd4dc6d6fda15dbe3',
              menuType: 2,
              menuName: '删除',
              menuCode: 'role@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655db5c7f10762608048cb0e',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ]
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
          __v: 0,
          children: [
            {
              _id: '655dbbc411c02c8597dce720',
              menuType: 2,
              menuName: '查看',
              menuCode: 'dept@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655dbbb911c02c8597dce71c',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:23:39.918Z',
              __v: 0
            },
            {
              _id: '655dc6f4d4dc6d6fda15dbe7',
              menuType: 2,
              menuName: '新增',
              menuCode: 'dept@create',
              orderBy: 1,
              menuState: 1,
              parentId: '655dbbb911c02c8597dce71c',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6fdd4dc6d6fda15dbeb',
              menuType: 2,
              menuName: '编辑',
              menuCode: 'dept@edit',
              orderBy: 2,
              menuState: 1,
              parentId: '655dbbb911c02c8597dce71c',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc708d4dc6d6fda15dbef',
              menuType: 2,
              menuName: '删除',
              menuCode: 'dept@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655dbbb911c02c8597dce71c',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ],
          buttons: [
            {
              _id: '655dbbc411c02c8597dce720',
              menuType: 2,
              menuName: '查看',
              menuCode: 'dept@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655dbbb911c02c8597dce71c',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:23:39.918Z',
              __v: 0
            },
            {
              _id: '655dc6f4d4dc6d6fda15dbe7',
              menuType: 2,
              menuName: '新增',
              menuCode: 'dept@create',
              orderBy: 1,
              menuState: 1,
              parentId: '655dbbb911c02c8597dce71c',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc6fdd4dc6d6fda15dbeb',
              menuType: 2,
              menuName: '编辑',
              menuCode: 'dept@edit',
              orderBy: 2,
              menuState: 1,
              parentId: '655dbbb911c02c8597dce71c',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc708d4dc6d6fda15dbef',
              menuType: 2,
              menuName: '删除',
              menuCode: 'dept@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655dbbb911c02c8597dce71c',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ]
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
          __v: 0,
          children: [
            {
              _id: '655dbc4d11c02c8597dce72c',
              menuType: 2,
              menuName: '详情',
              menuCode: 'order@detail',
              orderBy: 0,
              menuState: 1,
              parentId: '655dbc3811c02c8597dce728',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T09:17:29.680Z',
              __v: 0
            },
            {
              _id: '655dc735d4dc6d6fda15dbf6',
              menuType: 2,
              menuName: '打点',
              menuCode: 'order@point',
              orderBy: 1,
              menuState: 1,
              parentId: '655dbc3811c02c8597dce728',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc73fd4dc6d6fda15dbfa',
              menuType: 2,
              menuName: '轨迹',
              menuCode: 'order@route',
              orderBy: 2,
              menuState: 1,
              parentId: '655dbc3811c02c8597dce728',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc74cd4dc6d6fda15dbfe',
              menuType: 2,
              menuName: '删除',
              menuCode: 'order@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655dbc3811c02c8597dce728',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ],
          buttons: [
            {
              _id: '655dbc4d11c02c8597dce72c',
              menuType: 2,
              menuName: '详情',
              menuCode: 'order@detail',
              orderBy: 0,
              menuState: 1,
              parentId: '655dbc3811c02c8597dce728',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T09:17:29.680Z',
              __v: 0
            },
            {
              _id: '655dc735d4dc6d6fda15dbf6',
              menuType: 2,
              menuName: '打点',
              menuCode: 'order@point',
              orderBy: 1,
              menuState: 1,
              parentId: '655dbc3811c02c8597dce728',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc73fd4dc6d6fda15dbfa',
              menuType: 2,
              menuName: '轨迹',
              menuCode: 'order@route',
              orderBy: 2,
              menuState: 1,
              parentId: '655dbc3811c02c8597dce728',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            },
            {
              _id: '655dc74cd4dc6d6fda15dbfe',
              menuType: 2,
              menuName: '删除',
              menuCode: 'order@delete',
              orderBy: 3,
              menuState: 1,
              parentId: '655dbc3811c02c8597dce728',
              createId: 1000002,
              createTime: '2023-11-22T08:52:47.967Z',
              updateTime: '2023-11-22T08:52:47.967Z',
              __v: 0
            }
          ]
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
          __v: 0,
          children: [
            {
              _id: '655dbc7911c02c8597dce734',
              menuType: 2,
              menuName: '查看',
              menuCode: 'cluster@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655dbc6c11c02c8597dce730',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:23:39.918Z',
              __v: 0
            }
          ],
          buttons: [
            {
              _id: '655dbc7911c02c8597dce734',
              menuType: 2,
              menuName: '查看',
              menuCode: 'cluster@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655dbc6c11c02c8597dce730',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:23:39.918Z',
              __v: 0
            }
          ]
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
          __v: 0,
          children: [
            {
              _id: '655dbcb011c02c8597dce73c',
              menuType: 2,
              menuName: '查看',
              menuCode: 'driverList@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655dbca311c02c8597dce738',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:23:39.918Z',
              __v: 0
            }
          ],
          buttons: [
            {
              _id: '655dbcb011c02c8597dce73c',
              menuType: 2,
              menuName: '查看',
              menuCode: 'driverList@query',
              orderBy: 0,
              menuState: 1,
              parentId: '655dbca311c02c8597dce738',
              createId: 1000002,
              createTime: '2023-11-22T08:23:39.918Z',
              updateTime: '2023-11-22T08:23:39.918Z',
              __v: 0
            }
          ]
        }
      ]
    },
    {
      _id: '674be9ace92c3a995cc58338',
      menuType: 1,
      menuName: 'ces',
      orderBy: 3,
      menuState: 1,
      parentId: '',
      createId: 1000002,
      createTime: '2024-10-23T08:22:40.227Z',
      updateTime: '2024-10-23T08:22:40.227Z',
      __v: 0
    }
  ];
  useEffect(() => {
    const list = findTreeNode(data, pathname, []);
    setBreadList([<a href="/welcome">首页</a>, ...list]);
  }, [pathname]);
  return <Breadcrumb items={breadList.map(item => ({ title: item }))} className="ml-[5px]"></Breadcrumb>;
};

export default BreadCrumb;
