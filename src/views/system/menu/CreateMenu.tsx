import React, { useEffect } from 'react';
import { MenuType } from '@/types/api.ts';
import { Button, Form, Input, Space } from 'antd';
interface CreateMenuProps {
  onOk: () => void;
  onCancel: () => void;
  info?: MenuType.MenuItem;
}
const CreateMenu: React.FC<CreateMenuProps> = ({ info, onOk, onCancel }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(info);
  }, []);
  // 提交
  const submitHandler = async () => {
    try {
      await form.validateFields();
      onOk();
      form.resetFields();
    } catch (error) {
      console.log('Validation failed:', error);
    }
  };
  // 取消
  const cancelHandler = () => {
    onCancel();
    form.resetFields();
  };
  return (
    <div>
      <Form labelCol={{ span: 4 }} labelAlign="right" form={form}>
        <Form.Item label="父级菜单" name="parentId">
          <Input />
        </Form.Item>
        <Form.Item label="菜单类型" name="menuType">
          <Input />
        </Form.Item>
        <Form.Item
          label="菜单名称"
          name="menuName"
          rules={[
            { required: true, message: '请输入菜单名称' },
            { min: 2, max: 4, message: '用户名称最小2个字符，最大4个字符' }
          ]}>
          <Input placeholder="请输入菜单名称" />
        </Form.Item>
        <Form.Item label="菜单图标" name="icon">
          <Input placeholder="请输入菜单图标" />
        </Form.Item>
        <Form.Item label="路由地址" name="path">
          <Input placeholder="请输入路由地址" />
        </Form.Item>
        <Form.Item label="组件地址" name="component">
          <Input placeholder="请输入组件地址" />
        </Form.Item>
        <Form.Item label="排序" name="menuCode">
          <Input placeholder="请输入序号" />
        </Form.Item>
        <Form.Item label="菜单状态" name="menuState">
          <Input placeholder="请输入菜单状态" />
        </Form.Item>
      </Form>
      <div style={{ textAlign: 'right' }}>
        <Space>
          <Button onClick={() => cancelHandler()}>取消</Button>
          <Button type="primary" onClick={() => submitHandler()}>
            确定
          </Button>
        </Space>
      </div>
    </div>
  );
};
export default CreateMenu;
