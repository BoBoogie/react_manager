import request from '@/utils/request.ts';
import { Button } from 'antd';

const Login = () => {
  const clickHandler = () => {
    request.post('/users/login').then(r => {
      console.log(r);
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
