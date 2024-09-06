import welcome from '@/assets/images/welcome.svg';
import { useEffect } from 'react';
import api from '@/api';
import useBearStore from '@/store';

const Welcome = () => {
  const setUserInfo = useBearStore(state => state.setUserInfo);
  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    const res = await api.getUserInfo();
    setUserInfo(res);
  };
  return (
    <div className="flex items-center justify-center  bg-white rounded-[5px] h-[calc(100vh-170px)]">
      <div className="mt-[-60px]">
        <div className="text-[30px] text-black leading-[42px]">欢迎体验</div>
        <div className="text-[40px] text-[#9D68D3] leading-[62px]">React18通用后台管理系统</div>
        <div className="text-[14px] text-[#A0A0A0]">React18 + ReactRouter6 + Antd5 + Vite + TypeScript</div>
      </div>
      <div className="max-w-[402px] max-h-[320px] ml-[105px]">
        <img src={welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Welcome;
