import { Layout } from 'antd';
const LayoutFooter = () => {
  const { Footer } = Layout;
  return (
    <Footer className="text-center leading-[30px] text-[#B0AEAE] p-[20px_50px_0]">
      <div>
        <a className="text-[#b0aeae] m-[0_12px] hover:text-[#9d68d3]" href="https://www.imooc.com/u/1343480" target="_blank" rel="noreferrer">
          河畔一角主页
        </a>
        <span className="m-[0_10px]">|</span>
        <a className="text-[#b0aeae] m-[0_12px] hover:text-[#9d68d3]" href="https://coding.imooc.com/class/644.html" target="_blank" rel="noreferrer">
          React18+TS开发通用后台（新课）
        </a>
        <span className="m-[0_10px]">|</span>
        <a className="text-[#b0aeae] m-[0_12px] hover:text-[#9d68d3]" href="https://coding.imooc.com/class/502.html" target="_blank" rel="noreferrer">
          Vue3全栈后台
        </a>
        <span className="m-[0_10px]">|</span>
        <a className="text-[#b0aeae] m-[0_12px] hover:text-[#9d68d3]" href="https://coding.imooc.com/class/397.html" target="_blank" rel="noreferrer">
          Vue全家桶开发小米商城项目
        </a>
      </div>
      <div>Copyright ©{new Date().getFullYear()} React18通用后台课程 All Rights Reserved.</div>
    </Footer>
  );
};

export default LayoutFooter;
