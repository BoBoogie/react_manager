import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './loading.scss';
const Loading = ({ tip = 'Loading' }: { tip?: string }) => {
  return (
    <Spin indicator={<LoadingOutlined spin />} tip={tip} size="large" className="request-loading">
      <span></span>
    </Spin>
  );
};

export default Loading;
