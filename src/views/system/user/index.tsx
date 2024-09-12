import { Form, Button, Input, Select, Table, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { User } from '@/types/api.ts';
import React, { useEffect, useRef, useState } from 'react';
import api from '@/api';
import CreateUser from '@/views/system/user/CreateUser.tsx';
import { IAction } from '@/types/modal.ts';
import { message, modal } from '@/utils/AntdGlobal.tsx';

const UserList = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<User.UserItem[]>();
  const [total, setTotal] = useState(0);
  const [userIds, setUserIds] = useState<number[]>([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  });
  const userRef = useRef<{ open: (type: IAction, data?: User.UserItem) => void }>();
  useEffect(() => {
    getUserList({
      pageNum: pagination.current,
      pageSize: pagination.pageSize
    });
  }, [pagination.current, pagination.pageSize]);
  // 获取用户列表
  const getUserList = async (params: User.Params) => {
    const values = form.getFieldsValue();
    const res = await api.getUserList({
      ...values,
      pageNum: params?.pageNum,
      pageSize: params?.pageSize || pagination.pageSize
    });
    setData(res.list);
    setTotal(res.page.total);
    setPagination({
      current: res.page.pageNum,
      pageSize: res.page.pageSize
    });
  };
  // 搜索
  const searchHandler = async () => {
    await getUserList({
      pageNum: 1
    });
  };
  // 重置
  const resetHandler = () => {
    form.resetFields();
    getUserList({
      pageNum: pagination.current
    });
  };
  // 新增
  const createHandler = () => {
    userRef.current?.open('create');
  };
  // 编辑
  const editHandler = (record: User.UserItem) => {
    userRef.current?.open('edit', record);
  };
  // 删除
  const deleteHandler = (userId: number) => {
    modal.confirm({
      title: '确定删除该用户？',
      onOk: () => deleteHandelSubmit([userId])
    });
  };
  // 批量删除
  const batchDeleteHandler = () => {
    if (userIds.length === 0) {
      message.warning('请选择要删除的用户！');
    } else {
      modal.confirm({
        title: '确定删除该批用户吗？',
        onOk: () => {
          // 重置选择
          setUserIds([]);
          deleteHandelSubmit(userIds);
        }
      });
    }
  };
  const deleteHandelSubmit = async (ids: number[]) => {
    await api.userDel({ userIds: ids });
    message.success('删除成功!');
    getUserList({
      pageNum: 1
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
      align: 'center',
      key: 'handler',
      render(record) {
        return (
          <Space>
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
              <Button type="primary" onClick={createHandler}>
                新增
              </Button>
              <Button type="primary" danger onClick={batchDeleteHandler}>
                批量删除
              </Button>
            </Space>
          </div>
        </div>
        <Table
          bordered
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: userIds,
            onChange: (selectedRowKeys: React.Key[]) => {
              setUserIds(selectedRowKeys as number[]);
            }
          }}
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
      <CreateUser
        modalRef={userRef}
        update={() => {
          getUserList({
            pageNum: 1
          });
        }}
      ></CreateUser>
    </div>
  );
};

export default UserList;
