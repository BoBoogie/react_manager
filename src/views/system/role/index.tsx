import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Space, Table } from 'antd';
import { formatDate } from '@/utils';
import { ColumnsType } from 'antd/es/table';
import { Role } from '@/types/api.ts';
import api from '@/api';
import { message, modal } from '@/utils/AntdGlobal.tsx';
import CreateRole from '@/views/system/role/CreateRole.tsx';

const RoleList: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Role.RoleItem[]>();
  const [total, setTotal] = useState(0);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  });
  useEffect(() => {
    getRoleList({
      pageNum: pagination.current,
      pageSize: pagination.pageSize
    });
  }, [pagination.current, pagination.pageSize]);
  const getRoleList = async (params?: Role.Params) => {
    const res = await api.getRoleList({
      ...form.getFieldsValue(),
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
  const columns: ColumnsType<Role.RoleItem> = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      align: 'center',
      key: 'roleName',
      width: '200px'
    },
    {
      title: '备注',
      dataIndex: 'remark',
      align: 'center',
      key: 'remark',
      width: '180px'
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      align: 'center',
      key: 'updateTime',
      render(updateTime) {
        return formatDate(updateTime);
      }
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
            <Button type="text" onClick={() => createHandler(record._id)}>
              新增
            </Button>
            <Button type="text" onClick={() => editHandler(record)}>
              设置权限
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
    getRoleList(params);
  };
  const resetHandler = () => {
    form.resetFields();
    getRoleList();
  };
  const createHandler = async (record: Role.RoleItem) => {
    const createModal = modal.confirm({
      title: <div>新增角色</div>,
      width: 800,
      icon: null,
      closable: true,
      footer: null,
      content: (
        <CreateRole
          info={record}
          onOk={async params => {
            await api.createRole(params);
            message.success('新增角色成功!');
            createModal.destroy();
            await getRoleList();
          }}
          onCancel={async () => {
            createModal.destroy();
            await getRoleList();
          }}
        />
      )
    });
  };
  const editHandler = async (record: Role.RoleItem) => {
    const editModal = modal.confirm({
      title: <div>编辑角色</div>,
      width: 800,
      icon: null,
      closable: true,
      footer: null,
      content: (
        <CreateRole
          info={record}
          onOk={async params => {
            await api.editRole(params);
            message.success('设置权限成功!');
            editModal.destroy();
            await getRoleList();
          }}
          onCancel={async () => {
            editModal.destroy();
            await getRoleList();
          }}
        />
      )
    });
  };
  const deleteHandler = (record: { _id: string }) => {
    modal.confirm({
      title: '确定删除该角色？',
      onOk: async () => {
        await api.delMenuById({ _id: record?._id });
        message.success('删除角色成功!');
        await getRoleList();
      }
    });
  };

  return (
    <div>
      <div className="bg-white p-[20px] rounded-[5px] mb-[20px]">
        <Form layout="inline" form={form}>
          <Form.Item label="角色名称" name="roleName">
            <Input type="text" placeholder="请输入角色名称"></Input>
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
          <div className="title">角色列表</div>
        </div>
        <Table
          bordered
          dataSource={data}
          columns={columns}
          rowKey="roleName"
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
          }}></Table>
      </div>
    </div>
  );
};

export default RoleList;
