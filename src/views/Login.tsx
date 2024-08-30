import request from '@/utils/request.ts';
import { Button } from 'antd';

const Login = () => {
  const clickHandler = () => {
    request.post<string>('/users/login').then(res => {
      console.log(res);
    });
  };
  return (
    <>
      <div>login</div>
      <Button onClick={clickHandler}>点击</Button>
    </>
  );
};

export default Login;
