/**
 * 接口请求类型定义
 */
// 返回结果
export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}
//分页请求参数
export interface PageParams {
  pageNum: number | undefined;
  pageSize?: number | undefined;
}
// 登录
export namespace Login {
  export interface params {
    username: string;
    password: string;
  }
}
// 用户接口
export namespace User {
  export interface Params extends PageParams {
    userId?: number;
    userName?: string;
    state?: number;
  }
  // 创建用户参数
  export interface CreateParams {
    userName: string;
    userEmail: string;
    mobile?: number;
    job?: string;
    state?: number;
    roleList?: string[];
    deptId?: string[];
    userImg: string;
  }
  // 修改用户参数
  export interface EditParams extends CreateParams {
    userId?: number;
  }
  // 用户对象
  export interface UserItem extends CreateParams {
    userId: number;
    stateName?: string;
    deptName?: string;
    createTime?: number | string;
    lastLoginTime?: number | string;
  }
}

export namespace OrderType {
  export interface LineData {
    label: string[];
    order: number[];
    money: number[];
  }
  export interface PieData {
    name: string;
    value: number[];
  }
  export interface RadarData {
    indicator: Array<{ name: string; max: number }>;
    data: {
      name: string;
      value: number[];
    };
  }
  export interface ReportData {
    driverCount: number;
    totalMoney: number;
    orderCount: number;
    cityNum: number;
  }
}
