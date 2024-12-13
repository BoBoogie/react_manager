import { Button, Form, Input, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Dept } from '@/types/api.ts';
import { useEffect, useRef, useState } from 'react';
import api from '@/api';
import { formatDate } from '@/utils';
import { IAction } from '@/types/modal.ts';
import { modal } from '@/components/antd-global';
import CreateDept from '@/views/system/dept/create-dept';

const DeptList = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Dept.DeptItem[]>();
  const deptRef = useRef<{ open: (type: IAction, data?: Dept.EditParams | { parentId: string }) => void }>();
  useEffect(() => {
    getDeptList();
  }, []);
  const getDeptList = async () => {
    const res = await api.getDeptList();
    setData(res);
  };
  const searchHandler = () => {
    getDeptList();
  };
  const resetHandler = () => {
    form.resetFields();
    getDeptList();
  };
  const createHandler = (id: string) => {
    deptRef.current?.open('create', { parentId: id });
  };
  const editHandler = (record: Dept.DeptItem) => {
    deptRef.current?.open('edit', record);
  };
  const deleteHandler = (id: string) => {
    modal.confirm({
      title: '确定删除该部门？',
      onOk: async () => {
        await api.delDeptById({ _id: id });
        getDeptList();
      }
    });
  };
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
      render(record) {
        return (
          <Space>
            <Button type="text" onClick={() => createHandler(record._id)}>
              新增
            </Button>
            <Button type="text" onClick={() => editHandler(record)}>
              编辑
            </Button>
            <Button type="text" danger onClick={() => deleteHandler(record._id)}>
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
              <Button type="primary" onClick={() => createHandler}>
                新增
              </Button>
            </Space>
          </div>
        </div>
        <Table bordered dataSource={data} columns={columns} rowKey="deptName"></Table>
      </div>
      <CreateDept
        modalRef={deptRef}
        update={() => {
          getDeptList();
        }}></CreateDept>
    </div>
  );
};

export default DeptList;
