import { Spin } from 'antd';
import './loading.scss';
const Loading = ({ tip = 'Loading' }: { tip?: string }) => {
  return (
    <Spin tip={tip} size="large" className="request-loading">
      <span></span>
    </Spin>
  );
};

export default Loading;
