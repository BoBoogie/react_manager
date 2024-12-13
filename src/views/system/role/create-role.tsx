import React, { useEffect } from 'react';
import { Role } from '@/types/api.ts';
import { Button, Form, Input, Space } from 'antd';

interface CreateRoleProps {
  onOk: (params: Role.EditParams) => void;
  onCancel: () => void;
  info?: Role.RoleItem;
}

const CreateRole: React.FC<CreateRoleProps> = ({ info, onOk, onCancel }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(info);
  }, []);
  // 提交
  const submitHandler = async () => {
    try {
      await form.validateFields();
      const params = {
        ...form.getFieldsValue()
      };
      onOk(params);
    } catch (error) {
      console.log('Validation failed:', error);
    }
  };
  return (
    <div>
      <Form labelCol={{ span: 4 }} labelAlign="right" form={form}>
        <Form.Item label="角色名称" name="roleName">
          <Input placeholder="请输入角色名称"></Input>
        </Form.Item>
        <Form.Item label="备注" name="remark">
          <Input.TextArea placeholder="请输入备注"></Input.TextArea>
        </Form.Item>
      </Form>
      <div style={{ textAlign: 'right' }}>
        <Space>
          <Button onClick={onCancel}>取消</Button>
          <Button type="primary" onClick={() => submitHandler()}>
            确定
          </Button>
        </Space>
      </div>
    </div>
  );
};
export default CreateRole;
