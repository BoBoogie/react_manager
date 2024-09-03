import { Form, Button, Input } from 'antd';
import { message } from '@/utils/AntdGlobal';
import api from '@/api';
import { Login } from '@/types/api';
import storage from '@/utils/storage.ts';
import { useState } from 'react';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: Login.params) => {
    setLoading(true);
    const res: any = await api.login(values);
    if (res.code != 40001) {
      setLoading(false);
      storage.set('token', res);
      await message.success('登录成功', 1);
      const params = new URLSearchParams(location.search);
      location.href = params.get('callback') || '/welcome';
    } else {
      setLoading(false);
      message.error('用户名或密码错误');
    }
  };
  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
      <Form.Item name="userName" rules={[{ required: true, message: '请输入用户名!' }]}>
        <Input placeholder="用户名" />
      </Form.Item>

      <Form.Item name="userPwd" rules={[{ required: true, message: '请输入密码!' }]}>
        <Input.Password placeholder="密码" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" loading={loading}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
