import classes from './login.module.scss';
import loginLeft from '@/assets/images/login_left.svg';
import LoginForm from '@/views/login/LoginForm/LoginForm.tsx';

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.left}>
          <img src={loginLeft} alt="login" />
        </div>
        <div className={classes.form}>
          <div className="text-4xl text-black mb-16">系统登录</div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
