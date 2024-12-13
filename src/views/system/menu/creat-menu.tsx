import React, { useEffect } from 'react';
import { MenuType } from '@/types/api.ts';
import { Button, Form, Input, InputNumber, Radio, Space, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
interface CreateMenuProps {
  onOk: (params: MenuType.CreateParams) => void;
  onCancel: () => void;
  info?: MenuType.MenuItem;
}
const CreatMenu: React.FC<CreateMenuProps> = ({ info, onOk, onCancel }) => {
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
        <Form.Item label="父级菜单" name="parentId">
          <Input />
        </Form.Item>
        <Form.Item label="菜单类型" name="menuType">
          <Radio.Group defaultValue={1}>
            <Radio value={1}>菜单</Radio>
            <Radio value={2}>按钮</Radio>
            <Radio value={3}>页面</Radio>
          </Radio.Group>
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
        <Form.Item
          label={
            <div>
              排序&nbsp;
              <Tooltip title="排序值越大越靠后">
                <InfoCircleOutlined className="text-[#9A9A9A]" />
              </Tooltip>
            </div>
          }
          name="menuCode">
          <InputNumber />
        </Form.Item>
        <Form.Item label="菜单状态" name="menuState">
          <Radio.Group defaultValue={1}>
            <Radio value={1}>正常</Radio>
            <Radio value={2}>停用</Radio>
          </Radio.Group>
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
export default CreatMenu;
