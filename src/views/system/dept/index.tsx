import { Button, Form, Input, Space, Table } from 'antd';
import type { Dept } from '@/types/api.ts';
import { useEffect, useState } from 'react';
import api from '@/api';
import { ColumnsType } from 'antd/es/table';
import { formatDate } from '@/utils';

const Dept = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Dept.DeptItem[]>();
  useEffect(() => {
    getDeptList();
  }, []);
  const getDeptList = async () => {
    const res = await api.getDeptList();
    setData(res);
  };
  const searchHandler = () => {};
  const resetHandler = () => {};
  const createHandler = () => {};
  const batchDeleteHandler = () => {};
  const columns: ColumnsType<Dept.DeptItem> = [
    {
      title: '部门名称',
      dataIndex: 'deptName',
      align: 'center',
      key: 'deptName',
      width: '200px'
    },
    {
      title: '负责人',
      dataIndex: 'userName',
      align: 'center',
      key: 'userName',
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
      width: '230px',
      render() {
        return (
          <Space>
            <Button type="text">新增</Button>
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
        <Form layout="inline" form={form}>
          <Form.Item name="deptName" label="部门名称">
            <Input type="text" placeholder="部门名称" />
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
          <div className="title">部门列表</div>
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
        <Table bordered dataSource={data} columns={columns}></Table>
      </div>
    </div>
  );
};

export default Dept;
