import { Form, Button, Input, Select, Table, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { User } from '@/types/api.ts';
import { useEffect, useState } from 'react';
import api from '@/api';
import CreateUser from '@/views/system/user/CreateUser.tsx';

const UserList = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<User.UserItem[]>();
  const [total, setTotal] = useState(0);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  });
  useEffect(() => {
    getUserList({
      pageNum: pagination.current,
      pageSize: pagination.pageSize
    });
  }, [pagination.current, pagination.pageSize]);
  const getUserList = async (params: User.Params) => {
    const values = form.getFieldsValue();
    const res = await api.getUserList({
      ...values,
      pageNum: params?.pageNum || 1,
      pageSize: params?.pageSize || 10
    });
    setData(res.list);
    setTotal(res.page.total);
    setPagination({
      current: res.page.pageNum,
      pageSize: res.page.pageSize
    });
  };
  const searchHandler = async () => {
    await getUserList({
      pageNum: 1,
      pageSize: pagination.pageSize
    });
  };
  const resetHandler = () => {
    form.resetFields();
    getUserList({
      pageNum: pagination.current,
      pageSize: pagination.pageSize
    });
  };
  const columns: ColumnsType<User.UserItem> = [
    {
      title: '用户ID',
      dataIndex: 'userId',
      align: 'center',
      key: 'userId'
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      align: 'center',
      key: 'userName'
    },
    {
      title: '用户邮箱',
      dataIndex: 'userEmail',
      align: 'center',
      key: 'userEmail'
    },
    {
      title: '用户角色',
      dataIndex: 'role',
      align: 'center',
      key: 'role',
      render(role: number) {
        return {
          0: '超级管理员',
          1: '管理员',
          2: '体验管理员',
          3: '普通用户'
        }[role];
      }
    },
    {
      title: '用户状态',
      dataIndex: 'state',
      align: 'center',
      key: 'state',
      render(state: number) {
        return {
          1: '在职',
          2: '离职',
          3: '试用期'
        }[state];
      }
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      align: 'center',
      key: 'createTime'
    },
    {
      title: '最后登录时间',
      dataIndex: 'lastLoginTime',
      align: 'center',
      key: 'lastLoginTime'
    },
    {
      title: '操作',
      dataIndex: 'handler',
      align: 'center',
      key: 'handler',
      render() {
        return (
          <Space>
            <Button type="text">编辑</Button>
            <Button type="text" danger>
              删除
            </Button>
          </Space>
        );
      }
    }
  ];
  return (
    <div>
      <div className="bg-white p-[20px] rounded-[5px] mb-[20px]">
        <Form layout="inline" initialValues={{ state: 0 }} form={form}>
          <Form.Item name="userId" label="用户ID">
            <Input type="text" placeholder="请输入用户ID" />
          </Form.Item>
          <Form.Item name="userName" label="用户名称">
            <Input type="text" placeholder="请输入用户名称" />
          </Form.Item>
          <Form.Item name="state" label="状态">
            <Select style={{ width: 120 }}>
              <Select.Option value={0}>所有</Select.Option>
              <Select.Option value={1}>在职</Select.Option>
              <Select.Option value={2}>试用期</Select.Option>
              <Select.Option value={3}>离职</Select.Option>
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
          <div className="title">用户列表</div>
          <div className="action">
            <Space>
              <Button type="primary">新增</Button>
              <Button type="primary" danger>
                批量删除
              </Button>
            </Space>
          </div>
        </div>
        <Table
          bordered
          rowSelection={{ type: 'checkbox' }}
          dataSource={data}
          columns={columns}
          rowKey="userId"
          pagination={{
            position: ['bottomRight'],
            current: pagination.current,
            pageSize: pagination.pageSize,
            total,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: total => {
              return `总共${total}条`;
            },
            onChange: (page, pageSize) => {
              setPagination({
                current: page,
                pageSize
              });
            }
          }}
        />
      </div>
      <CreateUser></CreateUser>
    </div>
  );
};

export default UserList;
