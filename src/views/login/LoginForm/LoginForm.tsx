import { FormProps } from 'antd';
import { Form, Button, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = values => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo);
};
const LoginForm = () => {
  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item<FieldType> name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
        <Input />
      </Form.Item>

      <Form.Item<FieldType> name="password" rules={[{ required: true, message: '请输入密码!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
