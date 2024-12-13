import { Form, Input, Modal, Select, TreeSelect } from 'antd';
import { IAction, IModelProp } from '@/types/modal.ts';
import { useEffect, useImperativeHandle, useState } from 'react';
import { Dept, User } from '@/types/api.ts';
import api from '@/api';
import { message } from '@/components/antd-global';

const CreateDept = (props: IModelProp<Dept.EditParams | { parentId: string }>) => {
  const [form] = Form.useForm();
  const [action, setAction] = useState<IAction>();
  const [visible, setVisible] = useState(false);
  const [deptList, setDeptList] = useState<Dept.DeptItem[]>([]);
  const [allUserList, setAllUserList] = useState<User.UserItem[]>([]);
  // 暴露子组件open方法
  useImperativeHandle(props.modalRef, () => {
    return {
      open
    };
  });
  useEffect(() => {
    getAllUserList();
  }, []);
  const open = (type: IAction, data?: Dept.EditParams | { parentId: string }) => {
    getDeptList();
    setAction(type);
    setVisible(true);
    form.setFieldsValue(data);
  };
  const getDeptList = async () => {
    const res = await api.getDeptList();
    setDeptList(res);
  };
  const getAllUserList = async () => {
    const res = await api.getAllUserList();
    setAllUserList(res);
  };
  const submitHandler = async () => {
    const valid = await form.validateFields();
    console.log(valid);
    if (valid) {
      const params: Dept.EditParams = {
        ...form.getFieldsValue()
      };
      if (action === 'create') {
        await api.createDept(params);
        message.success('创建成功！');
      } else {
        await api.editDept(params);
        message.success('编辑成功！');
      }
      cancelHandler();
      props.update();
    }
  };
  const cancelHandler = () => {
    setVisible(false);
    form.resetFields();
  };
  return (
    <Modal title={action === 'create' ? '新增部门' : '编辑部门'} width={800} open={visible} okText="确定" cancelText="取消" onOk={submitHandler} onCancel={cancelHandler}>
      <Form labelCol={{ span: 4 }} labelAlign="right" form={form}>
        {/*隐藏域, form表单字段新增_id*/}
        <Form.Item name="_id" hidden>
          <Input />
        </Form.Item>
        <Form.Item label="上级部门" name="parentId">
          {/*fieldNames自定义label和value_id映射*/}
          <TreeSelect
            fieldNames={{ label: 'deptName', value: '_id' }}
            showSearch
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="请选择上级部门"
            allowClear
            treeDefaultExpandAll
            treeData={deptList}
          />
        </Form.Item>
        <Form.Item label="部门名称" name="deptName" rules={[{ required: true, message: '请输入部门名称' }]}>
          <Input type="text" placeholder="请输入部门名称" />
        </Form.Item>
        <Form.Item label="负责人" name="userName" rules={[{ required: true, message: '请选择负责人' }]}>
          <Select placeholder="请选择负责人">
            {allUserList?.map(item => {
              return (
                <Select.Option key={item.userId} value={item.userName}>
                  {item.userName}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateDept;
