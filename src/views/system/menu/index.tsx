import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Space, Table } from 'antd';
import { formatDate } from '@/utils';
import { ColumnsType } from 'antd/es/table';
import { MenuType } from '@/types/api.ts';
import api from '@/api';
import CreateMenu from '@/views/system/menu/CreateMenu.tsx';
import { message, modal } from '@/utils/AntdGlobal.tsx';

const MenuList: React.FC = () => {
  useEffect(() => {
    getMenuList();
  }, []);
  const [form] = Form.useForm();
  const [data, setData] = useState<MenuType.MenuItem[]>();
  const getMenuList = async (params?: MenuType.Params) => {
    const res = await api.getMenuList(params);
    setData(res);
  };
  const columns: ColumnsType<MenuType.MenuItem> = [
    {
      title: '菜单名称',
      dataIndex: 'menuName',
      align: 'center',
      key: 'menuName',
      width: '200px'
    },
    {
      title: '图标',
      dataIndex: 'icon',
      align: 'center',
      key: 'icon',
      width: '180px'
    },
    {
      title: '菜单类型',
      dataIndex: 'menuType',
      align: 'center',
      key: 'menuType',
      width: '120px',
      render(menuType: number) {
        return {
          1: '目录',
          2: '菜单',
          3: '按钮'
        }[menuType];
      }
    },
    {
      title: '权限标识',
      dataIndex: 'menuCode',
      align: 'center',
      key: 'menuCode',
      width: '180px'
    },
    {
      title: '路由地址',
      dataIndex: 'path',
      align: 'center',
      key: 'path',
      width: '180px'
    },
    {
      title: '组件路径',
      dataIndex: 'component',
      align: 'center',
      key: 'component',
      width: '120px'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      align: 'center',
      key: 'createTime',
      render(createTime) {
        return formatDate(createTime);
      }
    },
    {
      title: '操作',
      align: 'center',
      key: 'handler',
      width: '250px',
      render(record) {
        return (
          <Space>
            <Button type="text" onClick={() => createHandler(record)}>
              新增
            </Button>
            <Button type="text" onClick={() => editHandler(record)}>
              编辑
            </Button>
            <Button type="text" danger onClick={() => deleteHandler(record)}>
              删除
            </Button>
          </Space>
        );
      }
    }
  ];
  const searchHandler = () => {
    const params = {
      ...form.getFieldsValue()
    };
    getMenuList(params);
  };
  const resetHandler = () => {
    form.resetFields();
    getMenuList();
  };
  const createHandler = async (record?: MenuType.MenuItem) => {
    const createModal = modal.confirm({
      title: <div>新增菜单</div>,
      width: 800,
      icon: null,
      closable: true,
      footer: null,
      content: (
        <CreateMenu
          info={record}
          onOk={async params => {
            await api.createMenu(params);
            message.success('新增菜单成功!');
            createModal.destroy();
          }}
          onCancel={() => {
            createModal.destroy();
          }}
        />
      )
    });
  };
  const editHandler = async (record: MenuType.MenuItem) => {
    const editModal = modal.confirm({
      title: <div>编辑菜单</div>,
      width: 800,
      icon: null,
      closable: true,
      footer: null,
      content: (
        <CreateMenu
          info={record}
          onOk={async params => {
            await api.editMenu(params);
            message.success('编辑菜单成功!');
            editModal.destroy();
            await getMenuList();
          }}
          onCancel={() => {
            editModal.destroy();
            getMenuList();
          }}
        />
      )
    });
  };
  const deleteHandler = (record: { _id: string }) => {
    modal.confirm({
      title: '确定删除该菜单？',
      onOk: async () => {
        await api.delMenuById({ _id: record?._id });
        message.success('删除菜单成功!');
        await getMenuList();
      }
    });
  };

  return (
    <div>
      <div className="bg-white p-[20px] rounded-[5px] mb-[20px]">
        <Form layout="inline" initialValues={{ state: 1 }} form={form}>
          <Form.Item label="菜单名称" name="menuName">
            <Input type="text" placeholder="请输入角色名称"></Input>
          </Form.Item>
          <Form.Item name="state" label="菜单状态">
            <Select style={{ width: 120 }}>
              <Select.Option value={1}>正常</Select.Option>
              <Select.Option value={2}>停用</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" onClick={searchHandler}>
                搜索
              </Button>
              <Button onClick={resetHandler}>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
      <div className="base-table">
        <div className="header-wrapper">
          <div className="title">菜单列表</div>
          <div className="action">
            <Space>
              <Button type="primary" onClick={() => createHandler()}>
                新增
              </Button>
            </Space>
          </div>
        </div>
        <Table bordered dataSource={data} columns={columns} rowKey="menuName"></Table>
      </div>
    </div>
  );
};

export default MenuList;
