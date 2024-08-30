/**
 * 环境配置封装
 */

type Env = 'dev' | 'prod' | 'stg';

let env: Env = 'dev';

if (location.host.indexOf('localhost') > -1) {
  env = 'dev';
} else if (location.host === 'http://api-driver-stg.marsview.cc') {
  env = 'stg';
} else {
  env = 'prod';
}

const config = {
  dev: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    mock: false,
    cdn: 'http://xxx.aliyun.com',
    mockApi: 'http://xxx.mock.com'
  },
  stg: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-stg.marsview.cc',
    mock: false,
    cdn: 'http://xxx.aliyun.com',
    mockApi: 'http://xxx.mock.com'
  },
  prod: {
    baseApi: '/api',
    uploadApi: 'http://api-driver.marsview.cc',
    mock: false,
    cdn: 'http://xxx.aliyun.com',
    mockApi: 'http://xxx.mock.com'
  }
};

export default {
  env,
  ...config[env]
};
