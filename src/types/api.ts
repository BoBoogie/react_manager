// 接口类型定义
export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}

export namespace Login {
  export interface params {
    username: string;
    password: string;
  }
}
